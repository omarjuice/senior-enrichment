import React from 'react'
import history from '../history'
import { Router, Route } from 'react-router-dom'
import Welcome from './Welcome';
const Root = () => {
  return (
    <Router history={history}>
      <>
        <Route path='/' exact component={Welcome} />
      </>
    </Router>
  )
}

export default Root
