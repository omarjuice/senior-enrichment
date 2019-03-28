import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setModal, deleteStudent } from '../actions/index';
import { popIn } from '../animations';
class StudentCard extends Component {
    state = {
        hovered: false
    }
    componentDidMount() {
        this.props.animate ? popIn('.student-' + this.props.id) : null
    }
    handleClick() {
        const confirmationCallback = function (confirmation) {
            if (confirmation) {
                this.props.deleteStudent(this.props.id)
            } else {
                this.props.setModal(false, '', null)
            }
        }.bind(this)
        this.props.setModal(true,
            `Are you sure you want to delete ${this.props.firstName + ' ' + this.props.lastName}?`
            , confirmationCallback)
    }

    render() {
        const { firstName, lastName, imageUrl, email, gpa, id, disableDelete } = this.props
        return (
            <>
                {this.props.wayPoint}
                <div className="column is-full-mobile is-half-tablet is-one-third-desktop ">
                    <div className={`card has-background-white-bis ${'student-' + id}`}
                        onMouseOver={() => this.setState({ hovered: true })}
                        onMouseLeave={() => this.setState({ hovered: false })}
                        onClick={() => this.setState({ hovered: true })}
                    >
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img src={imageUrl} alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <Link to={'/students/' + id}>
                                        <p className="title is-4">{firstName + ' ' + lastName}</p>
                                    </Link>
                                </div>
                                {!disableDelete && this.state.hovered && <div className="media-right">
                                    <button onClick={this.handleClick.bind(this)} className="delete"></button>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                    .media{
                        width: 100%
                    }
                    .card *{
                        overflow: hidden !important;
                    }
                    `}</style>
                </div>
            </>
        );
    }
}

export default connect(null, { setModal, deleteStudent })(StudentCard);
