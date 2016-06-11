'use strict'

import { connect } from 'react-redux'
import Btn from '../components/Btn'
import { volumeMeterStart } from '../actions'
import { recorderStart } from 'react-recorder-redux/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(volumeMeterStart())
      dispatch(recorderStart())
    }
  }
}

export default connect(null, mapDispatchToProps)(Btn)
