import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setError } from '../actions/index';
const ErrorMessage = ({ error, setError }) => {

  if (error.exists) {
    return (
      <article class="message is-danger">
        <div class="message-header">
          <p>Error</p>
          <button onClick={() => setError(false, '')} class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {error.message}
        </div>
      </article>
    )
  }
  return null
}
const mapStateToProps = ({ error }) => ({ error })
export default connect(mapStateToProps, { setError })(ErrorMessage);
