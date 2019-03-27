import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class StudentForm extends Component {
    transformValues = (formValues) => {
        if (!formValues.campusId) {
            formValues.campusId = null
        } else {
            formValues.campusId = parseInt(formValues.campusId)
        }
        formValues.gpa = Number(formValues.gpa)
        return formValues
    }
    renderInput = ({ input, label, meta, type, min, max }) => {
        const className = () => {
            if (!meta.touched) {
                return 'input'
            }
            if (meta.error && meta.touched) {
                return 'input is-danger'
            }
            if (meta.visited) {
                return 'input is-success'
            }
            return 'input'
        }
        const helpMessage = <p className={meta.error && meta.touched ? 'help is-danger' : 'help is-invisible'}>{meta.error || 'Error'}</p>
        return (
            <div className="field">
                <label className="label" htmlFor={label}>{label}</label>
                <div className="control">
                    <input className={className()} type={type || "text"} {...input} autoComplete="off" min={min} max={max} />
                    {helpMessage}
                </div>
            </div>
        )
    }
    render() {
        return (
            <form className="form has-text-centered" onSubmit={this.props.handleSubmit((formValues) => this.props.onSubmit(this.transformValues(formValues)))} >
                <Field component={this.renderInput} name="firstName" label="firstName" />
                <Field component={this.renderInput} name="lastName" label="lastName" />
                <Field component={this.renderInput} name="email" label="email" type="email" />
                <Field component={this.renderInput} name="gpa" label="gpa" type="number" min={0} max={4} />
                <Field component={this.renderInput} name="imageUrl" label="imageUrl" />
                <Field component={this.renderInput} name="campusId" label="campus" type="number" min={1} />
                <button className="button is-success">Submit</button>
            </form>
        );
    }
}

const validate = ({ firstName, lastName, gpa, email }) => {
    const errors = {}
    if (!firstName) errors.firstName = "Please enter a first name."
    if (!lastName) errors.lastName = "Please enter a last name."
    if (!gpa) errors.gpa = "Please enter a GPA."
    if (gpa > 4.0 || gpa < 0) errors.gpa = "GPA must be between 0 and 4"
    if (!email) errors.email = "Email required"
    return errors
}

const mapStateToProps = (_, { initialValues = {} }) => ({ initialValues })

export default reduxForm({
    form: "Campus",
    validate,
    enableReinitialize: true
})(connect(mapStateToProps)(StudentForm));
