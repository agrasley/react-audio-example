'use strict'

import React, { PropTypes } from 'react'

const Btn = ({ text, onClick }) => (
  <button onClick={onClick}>{text}</button>
)

Btn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Btn
