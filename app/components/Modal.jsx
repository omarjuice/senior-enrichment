import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setModal } from '../actions/index';

class Modal extends Component {
    hide = () => {
        this.props.setModal(false, '', null)
    }
    render() {
        const { active, message, confirmationCallback } = this.props
        console.log(confirmationCallback);
        return (
            <div className={`modal ${active && 'is-active'}`}>
                <div onClick={this.hide} className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Confirm</p>
                        <button onClick={this.hide} className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body has-text-centered">
                        <h1 className="title is-5">{message}</h1>
                        <div className="columns is-mobile is-centered">
                            <div className="column is-1">
                                <button onClick={() => confirmationCallback(true)} className="button is-success">
                                    Yes
                                </button>
                            </div>
                            <div className="column is-1"></div>

                            <div className="column is-1">
                                <button onClick={() => confirmationCallback(false)} className="button is-danger">
                                    No
                                </button>
                            </div>
                        </div>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div>
        );
    }
}
const mapStateToProps = ({ modal }) => ({ ...modal })
export default connect(mapStateToProps, { setModal })(Modal);
