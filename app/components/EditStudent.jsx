import React, { Component } from 'react';
import StudentForm from './StudentForm';
import { connect } from 'react-redux';
import { updateStudent } from '../actions';

class EditStudent extends Component {
    onSubmit(formValues) {
        const campusWasUpdated = this.props.initialValues.campusId !== formValues.campusId
        this.props.updateStudent(this.props.id, formValues, campusWasUpdated)
    }
    render() {
        return (
            <div className="column has-text-centered is-two-fifths-third-desktop is-half-tablet is-11-mobile">
                <StudentForm initialValues={this.props.initialValues} onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { updateStudent })(EditStudent);
