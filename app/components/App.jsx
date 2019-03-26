import React from 'react'
import history from '../history'
import { Router, Route } from 'react-router-dom'
import Welcome from './Welcome';
import Campuses from './Campuses';
import Students from './Students';
const Root = () => {
  return (
    <Router history={history}>
      <>
        <Route path='/' exact component={Welcome} />
        <Route path='/campuses' exact component={Campuses} />
        <Route path='/students' exact component={Students} />
      </>
    </Router>
  )
}

export default Root
