import React, { Component } from 'react';

class CampusCard extends Component {
    render() {
        const { imageUrl, name, description, address } = this.props
        return (
            <div className="column is-one-third-desktop is-half-tablet">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={imageUrl} alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">

                            <div className="media-content">
                                <p className="title is-4">{name}</p>
                                <p className="subtitle is-6">{address}</p>
                            </div>
                        </div>

                        <div className="content">
                            {description.slice(0, 200)}
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .content{
                        max-height: 10vh;
                        overflow: scroll
                    }
                    `}</style>
            </div>
        );
    }
}

export default CampusCard;
