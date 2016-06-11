'use strict'

import { connect } from 'react-redux'
import Btn from '../components/Btn'
import { volumeMeterStop } from '../actions'
import { recorderStop } from 'react-recorder-redux/actions'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(volumeMeterStop())
      dispatch(recorderStop())
    }
  }
}

export default connect(null, mapDispatchToProps)(Btn)
