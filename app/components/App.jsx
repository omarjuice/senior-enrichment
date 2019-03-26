import React from 'react'
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Welcome from './Welcome';
import Campuses from './Campuses';
import Students from './Students';
import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';
const App = () => {
  return (<>

    <Router history={history}>
      <>
        <Navbar />
        <div className="container">
          <ErrorMessage />
          <Route path='/' exact component={Welcome} />
          <Route path='/campuses' exact component={Campuses} />
          <Route path='/students' exact component={Students} />
        </div>
      </>
    </Router>
  </>
  )
}

export default App
