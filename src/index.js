'use strict'

import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store'
import Root from './containers/Root'

const store = configureStore()

const rootElt = document.getElementById('root')
render(
  <Root store={store} />,
  rootElt
)
