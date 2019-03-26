import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentCard from './StudentCard';
import { getStudents } from '../actions'
class Students extends Component {
    componentDidMount() {
        this.props.getStudents()
    }
    render() {
        const { students } = this.props
        return (
            <div className="columns is-multiline is-tablet">
                {students.data.map(student => {
                    return <StudentCard key={student.id} {...student} />
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ students, loading }) => ({ students, loading })

export default connect(mapStateToProps, { getStudents })(Students);
