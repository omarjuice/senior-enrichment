import React, { Component } from 'react';
import CampusForm from './CampusForm';
import { connect } from 'react-redux';
import { updateCampus } from '../actions/index';

class EditCampus extends Component {
    onSubmit(formValues) {
        this.props.updateCampus(this.props.id, formValues)
    }
    render() {
        return (
            <div className="column is-5-desktop is-8-tablet is-11-mobile has-text-centered">
                <CampusForm initialValues={this.props.initialValues} onSubmit={this.onSubmit.bind(this)} />
            </div>
        );
    }
}

export default connect(null, { updateCampus })(EditCampus);
