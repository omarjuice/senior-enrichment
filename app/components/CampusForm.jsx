import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class CampusForm extends Component {
    transformValues = (formValues) => {
        return formValues
    }
    renderInput = ({ input, label, meta }) => {
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
                    <input className={className()} type="text" {...input} autoComplete="off" />
                    {helpMessage}
                </div>
            </div>
        )
    }
    render() {
        return (
            <form className="form has-text-centered" onSubmit={this.props.handleSubmit((formValues) => this.props.onSubmit(formValues))} >
                <Field component={this.renderInput} name="name" label="name" />
                <Field component={this.renderInput} name="address" label="address" />
                <Field component={this.renderInput} name="description" label="description" />
                <Field component={this.renderInput} name="imageUrl" label="imageUrl" />
                <button className="button is-success">Submit</button>
            </form>
        );
    }
}

const validate = ({ name, address, description }) => {
    const errors = {}
    if (!name) errors.name = "Please enter a name."
    if (!address) errors.address = "Please enter an address."
    if (!description) errors.description = "Please enter a description."
    return errors
}

export default reduxForm({
    form: "Campus",
    validate,
    enableReinitialize: true
})(CampusForm);
