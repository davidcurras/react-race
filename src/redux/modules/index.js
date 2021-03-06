// @flow
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import env from './env'
import request from './request'
import init from './init'
import auth from './auth'
import ui from './ui'

// Examples
import profile from './profile'
import todos from './todos'


const rootReducer = combineReducers({
  env,
  request,
  init,
  auth,
  ui,

  // Examples
  profile,
  todos,

  // redux-form
  form,
  // react-router-redux
  routing,
})


export default rootReducer
