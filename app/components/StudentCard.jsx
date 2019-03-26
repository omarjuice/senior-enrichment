import React, { Component } from 'react';

class StudentCard extends Component {
    render() {
        const { firstName, lastName, imageUrl, email, gpa } = this.props
        return (
            <div className="column is-full-mobile is-half-tablet is-one-third-desktop ">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={imageUrl} alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{firstName + ' ' + lastName}</p>
                                <p className="subtitle is-6">{email}</p>
                            </div>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-item has-text-centered">
                                <div>
                                    <p className="heading">GPA:</p>
                                    <p className="title">{gpa}</p>
                                </div>
                            </div>

                        </nav>
                        {/* <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                <a href="#">#css</a> <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentCard;
