'use strict'

import { connect } from 'react-redux'
import VolumeMeterComponent from 'react-volume-meter'

const mapStateToProps = (state, ownProps) => {
  const stream = state.recorder.stream
  return {
    src: stream ? ownProps.audioContext.createMediaStreamSource(stream) : undefined,
    command: state.volumeMeter
  }
}

const VolumeMeter = connect(mapStateToProps)(VolumeMeterComponent)
export default VolumeMeter
