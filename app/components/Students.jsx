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
            <div className="container">
                <div className="columns is-multiline is-tablet">
                    {students.data.map(({ id, ...student }) => {
                        console.log(id);
                        return <StudentCard key={id} {...student} />
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, null)(Students);
