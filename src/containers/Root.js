'use strict'

import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

const Root = ({store}) => (
  <Provider store={store}>
    <p>Hello world!</p>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
