import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import campuses from './campus'
import students from './student'
import loading from './loading'
import error from './error'
import modal from './modal'

export default combineReducers({
  campuses,
  students,
  loading,
  form,
  error,
  modal
})

