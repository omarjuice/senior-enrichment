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
        console.log('PROPS ', this.props)
        return (
            <div className="columns is-centered">
                <div className="column is-one-third">
                    <StudentForm onSubmit={this.onSubmit.bind(this)} />
                </div>
            </div>
        );
    }
}

export default connect(null, { addStudent })(AddStudent);
