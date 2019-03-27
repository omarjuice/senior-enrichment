import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setModal } from '../actions/';
class CampusCard extends Component {
    render() {
        const { imageUrl, name, description, address, id, setModal } = this.props
        return (
            <div className="column is-one-third-desktop is-half-tablet">
                <div className="card">
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
                                <div className="media-right">
                                    <button onClick={() => setModal(true, 'Are you sure?', null)} className="delete" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .card{
                        height: 20vh;
                        overflow: scroll;
                    }
                    .card-content{
                        height: 100%;
                        display: flex !important;
                        align-items: center !important;
                    }
                    .media{
                        width: 100%
                    }
                    .card::-webkit-scrollbar { width: 0 !important }
                    `}</style>;


            </div>
        );
    }
}
export default connect(null, { setModal })(CampusCard);
