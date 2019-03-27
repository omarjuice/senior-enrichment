import React, { Component } from 'react';
import { connect } from 'react-redux'
import StudentCard from './StudentCard';
import { getStudents } from '../actions'
class Students extends Component {
    componentDidMount() {
        if (this.props.students.data.length < 1) {
            this.props.getStudents()
        }
    }
    scroll() {
        const { students } = this.props
        document.querySelectorAll('.card')[students.offset - 5].scrollIntoView()
    }
    render() {
        const { students, loading } = this.props
        return (
            <>
                {!students.data.length && loading && <i className="fas fa-circle-notch fa-spin fa-2x"></i>}
                <div className="columns is-multiline is-tablet">
                    {students.data.map(student => {
                        return <StudentCard key={student.id} {...student} />
                    })}
                    {students.offset ?
                        <div className="column is-one-third-desktop is-half-tablet fetch-more">
                            <button onClick={() => this.props.getStudents(students.offset, 5, this.scroll.bind(this))} className={`button is-primary ${loading && 'is-loading'}`}>
                                See More
                        </button>
                        </div>
                        : ''}
                    <style jsx>{`
                    .fetch-more{
                        display: flex;
                        height: 20vh;
                        justify-content: center;
                        align-items: center
                    }
                    `}</style>
                </div>
            </>
        );
    }
}

const mapStateToProps = ({ students, loading }) => ({ students, loading })

export default connect(mapStateToProps, { getStudents })(Students);
