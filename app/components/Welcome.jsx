import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { getRecentCampuses, getRecentStudents } from '../actions/index';
import CampusCard from './CampusCard';
import StudentCard from './StudentCard';
class Welcome extends Component {
    componentDidMount() {
        this.props.getRecentCampuses()
        this.props.getRecentStudents()
    }
    render() {
        const { loading, recentCampuses, recentStudents } = this.props
        return (
            <div className="columns is-mobile is-centered is-multiline">
                <div className="column is-full">
                    <h1 className="title is-3 has-text-centered">
                        Welcome!
                   </h1>
                    <h1 className="title is-3 has-text-centered">
                        The Margaret Hamilton Interplanetary Academy of JavaScript
                   </h1>
                </div>
                {loading &&
                    <div className="column is-full has-text-centerd">
                        <i className="fas fa-circle-notch fa-spin fa-5x"></i>
                    </div>}
                <div className="column is-full has-text-centered">
                    <div className="columns is-mobile is-multiline is-centered">
                        <div className="column is-full-mobile is-one-third-desktop is-half-tablet title-col">
                            <h1 className="title is-4">
                                Recent Campuses
                        </h1>
                        </div>
                        {recentCampuses.map(campus => {
                            return <CampusCard disableDelete={false} key={campus.id} {...campus} />
                        })}
                    </div>
                </div>
                <div className="column is-full has-text-centered">
                    <div className="columns is-mobile is-multiline is-centered">
                        <div className="column is-full-mobile is-one-third-desktop is-half-tablet title-col">
                            <h1 className="title is-4">
                                Recent Students
                        </h1>
                        </div>
                        {recentStudents.map(student => {
                            return <StudentCard disableDelete={false} key={student.id} {...student} />
                        })}
                    </div>
                </div>
                <style jsx>{`
                    .title-col{
                        display: flex;
                        align-items: center;
                        justify-content: center
                    }
                    `}</style>
            </div>
        );
    }
}

const mapStateToProps = ({ campuses: { recent: recentCampuses }, students: { recent: recentStudents }, loading }) => (
    { recentCampuses, recentStudents, loading }
)
export default connect(mapStateToProps, { getRecentCampuses, getRecentStudents })(Welcome);
