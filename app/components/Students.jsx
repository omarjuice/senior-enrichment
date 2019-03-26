import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentCard from './StudentCard';
class Students extends Component {
    componentDidMount() {
        console.log(this.props.students)
    }
    render() {
        const { students } = this.props
        return (
            <div className="columns is-multiline is-tablet">
                {students.data.map(student => {
                    console.log(id);
                    return <StudentCard key={student.id} {...student} />
                })}
            </div>
        );
    }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, null)(Students);
