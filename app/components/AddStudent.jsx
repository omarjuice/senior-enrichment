import React, { Component } from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { addStudent } from '../actions';

class AddStudent extends Component {
    onSubmit(formValues) {
        this.props.addStudent(formValues, function (path) {
            this.props.history.push(path)
        }.bind(this))
    }
    render() {
        return (
            <div className="columns is-centered">
                <div className="column is-two-fifths-desktop is-two-thirds-tablet is-11-mobile">
                    <StudentForm onSubmit={this.onSubmit.bind(this)} />
                </div>
            </div>
        );
    }
}

export default connect(null, { addStudent })(AddStudent);
