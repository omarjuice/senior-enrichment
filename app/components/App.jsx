import React from 'react'
import history from '../history'
import { Router, Route } from 'react-router-dom'
import Welcome from './Welcome';
import Campuses from './Campuses';
import Students from './Students';
import Navbar from './Navbar';
const Root = () => {
  return (<>

    <Router history={history}>
      <>
        <Navbar />
        <div className="container">
          <Route path='/' exact component={Welcome} />
          <Route path='/campuses' exact component={Campuses} />
          <Route path='/students' exact component={Students} />
        </div>
      </>
    </Router>
  </>
  )
}

export default Root
