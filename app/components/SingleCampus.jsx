import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleCampus } from '../actions/index';
import StudentCard from './StudentCard';

class SingleCampus extends Component {
    componentDidMount() {
        this.props.getSingleCampus(this.props.match.params.id)
    }
    render() {
        const { selectedCampus: { id, name, address, description, imageUrl, students }, loading } = this.props
        return <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-5-desktop is-8-tablet is-11-mobile has-text-centered">
                {loading ? <i className="fas fa-circle-notch fa-spin fa-5x"></i> :
                    <div className="card">
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
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
            <div className="column is-full has-text-centered">{students ? <h1 className="title is-4">Students</h1> : null}</div>
            {
                students && students.length ? students.map(student => {
                    return <StudentCard key={student.id} {...student} />
                }) : <div className="column">This campus has no students yet.</div>
            }

            <style jsx>{`
                .column{
                    margin-top: 3rem;
                }
                `}</style>
        </div>

    }
}
const mapStateToProps = ({ campuses: { selectedCampus }, loading }) => ({ selectedCampus, loading })
export default connect(mapStateToProps, { getSingleCampus })(SingleCampus);
