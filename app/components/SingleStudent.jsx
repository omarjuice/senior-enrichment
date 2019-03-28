import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleStudent } from '../actions';
import { Link } from 'react-router-dom';
import CampusCard from './CampusCard';
import EditStudent from './EditStudent';

class SingleStudent extends Component {
    componentDidMount() {
        this.props.getSingleStudent(this.props.match.params.id)
    }
    render() {
        const { selectedStudent: { imageUrl, firstName, lastName, gpa, loading, id, email, campus } } = this.props
        if (!id) {
            return null
        }
        return (<div className="columns is-centered is-mobile is-multiline">
            <div className="column has-text-centered is-one-third-desktop is-half-tablet is-11-mobile">
                {loading ? <i className="fas fa-circle-notch fa-spin fa-5x"></i> : <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src={imageUrl} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <Link to={'/students/' + id}>
                                    <p className="title is-4">{firstName + ' ' + lastName}</p>
                                </Link>
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

                    </div>
                </div>}
            </div>
            {campus ? <CampusCard disableDelete={true} {...campus} /> : <div className="column is-one-third-desktop is-half-tablet is-11-mobile">
                This student does not go to school.
            </div>}
            <EditStudent id={id} initialValues={{ imageUrl, firstName, lastName, gpa, loading, id, email, campusId: campus ? campus.id : undefined }} />
        </div>
        );
    }
}
const mapStateToProps = ({ students: { selectedStudent }, loading }) => ({ selectedStudent, loading })
export default connect(mapStateToProps, { getSingleStudent })(SingleStudent);
