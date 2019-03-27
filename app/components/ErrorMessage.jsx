import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setError } from '../actions/index';
const ErrorMessage = ({ error, setError }) => {

  if (error.exists) {
    return (
      <article className="message is-danger">
        <div className="message-header">
          <p>Error</p>
          <button onClick={() => setError(false, '')} className="delete" aria-label="delete"></button>
        </div>
        <div className="message-body">
          {error.message}
        </div>
      </article>
    )
  }
  return null
}
const mapStateToProps = ({ error }) => ({ error })
export default connect(mapStateToProps, { setError })(ErrorMessage);
