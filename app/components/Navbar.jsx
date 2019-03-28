import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    state = {
        menu: false
    }
    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }
    render() {
        return (
            <div>
                <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <p className="navbar-item">
                            <Link to="/">
                                <img src="/favicon.ico" />
                            </Link>
                        </p>

                        <a onClick={this.toggleMenu} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className={`navbar-menu ${this.state.menu && 'is-active'}`}>
                        <div className="navbar-start">
                            <p className="navbar-item">
                                <Link to="/campuses" onClick={this.toggleMenu}>
                                    <span className="has-text-dark">
                                        Campuses
                                    </span>
                                </Link>
                            </p>
                            <p className="navbar-item">
                                <Link to="/students" onClick={this.toggleMenu}>
                                    <span className="has-text-dark">
                                        Students
                                    </span>
                                </Link>
                            </p>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">
                                    More
                            </a>
                                <div className="navbar-dropdown">
                                    <div className="navbar-item">
                                        <Link to="/new/student" onClick={this.toggleMenu}>New Student</Link>
                                    </div>
                                    <hr className="navbar-divider" />
                                    <div className="navbar-item">
                                        <Link to="/new/campus" onClick={this.toggleMenu}>New Campus</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                 </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
