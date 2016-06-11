'use strict'

import { recorderReducer as recorder } from 'react-recorder-redux'
import { combineReducers } from 'redux'
import volumeMeter from './volumeMeterReducer'

export default combineReducers({
  recorder,
  volumeMeter
})
