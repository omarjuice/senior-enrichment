import React from 'react'
import { connect } from 'react-redux';
import { Router, Route } from 'react-router-dom'
import history from '../history'
import Welcome from './Welcome';
import Campuses from './Campuses';
import Students from './Students';
import Navbar from './Navbar';
import ErrorMessage from './ErrorMessage';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Modal from './Modal';
import AddCampus from './AddCampus';
import AddStudent from './AddStudent';
const App = () => {
  return (<div>

    <Router history={history}>
      <>
        <Navbar />
        <Modal />
        <div className="container">
          <ErrorMessage />
          <Route path='/' exact component={Welcome} />
          <Route path='/campuses' exact component={Campuses} />
          <Route path='/students' exact component={Students} />
          <Route path='/new/campus' exact component={AddCampus} />
          <Route path='/new/student' exact component={AddStudent} />
          <Route path='/campuses/:id' exact component={SingleCampus} />
          <Route path='/students/:id' exact component={SingleStudent} />
        </div>
      </>
    </Router>
    <style jsx>{`
        .container{
          margin-top: 4rem;
        }
        `}</style>
    <style jsx global>{`
      body, html{
        background-color: #fffdff
      }
      `}</style>
  </div>
  )
}

export default App
