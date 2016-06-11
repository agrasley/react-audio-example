'use strict'

import { VOLUME_METER_STOP, VOLUME_METER_START } from '../actions/TYPES'

const volumeMeterReducer = (state = 'none', action) => {
  switch (action.type) {
    case VOLUME_METER_STOP:
      return 'stop'
    case VOLUME_METER_START:
      return 'start'
    default:
      return state
  }
}

export default volumeMeterReducer
