import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import campuses from './campus'
import students from './student'

export default combineReducers({
  campuses,
  students,
  form
})

