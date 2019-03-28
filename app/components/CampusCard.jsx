import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setModal, deleteCampus } from '../actions/';
class CampusCard extends Component {
    handleClick() {
        const confirmationCallback = function (confirmation) {
            if (confirmation) {
                this.props.deleteCampus(this.props.id)
            } else {
                this.props.setModal(false, '', null)
            }
        }.bind(this)
        this.props.setModal(true, `Are you sure you want to delete ${this.props.name}?`, confirmationCallback)
    }
    render() {
        const { imageUrl, name, description, address, id, setModal, disableDelete } = this.props
        return (<>
            {this.props.wayPoint}
            <div className="column is-one-third-desktop is-half-tablet">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={imageUrl} alt={name} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <Link to={'/campuses/' + id}>
                                    <p className="title is-4">{name}</p>
                                </Link>
                            </div>
                            {!disableDelete && <div className="media-right">
                                <button onClick={this.handleClick.bind(this)} className="delete" />
                            </div>}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .card{
                        height: 20vh;
                        overflow: hidden;
                    }
                    .card * {
                        overflow: hidden !important;
                    }
                    .card-content{
                        height: 100%;
                        display: flex !important;
                        align-items: center !important;
                    }
                    .media{
                        width: 100%
                    }
                    .card::-webkit-scrollbar { display: none }
                    `}</style>
            </div>
        </>
        );
    }
}
export default connect(null, { setModal, deleteCampus })(CampusCard);
