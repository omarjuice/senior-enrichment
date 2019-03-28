import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentCard from './StudentCard';
import { getStudents } from '../actions'
import { Waypoint } from 'react-waypoint';
class Students extends Component {
    componentDidMount() {
        if (this.props.students.data.length < 1) {
            this.props.getStudents(0, 18)
        }
    }
    render() {
        const { students, loading } = this.props
        return (
            <>
                {!students.data.length && loading && <i className="fas fa-circle-notch fa-spin fa-2x"></i>}
                <div className="columns is-multiline is-tablet">
                    {students.data.map((student, i) => {
                        return <StudentCard animate={i > students.offset - 7} key={student.id} {...student} wayPoint={
                            students.offset && i === students.offset - 1 &&
                            <Waypoint onEnter={() => {
                                this.props.getStudents(students.offset, 6)
                            }} />
                        } />
                    })}
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ students, loading }) => ({ students, loading })

export default connect(mapStateToProps, { getStudents })(Students);
