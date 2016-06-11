'use strict'

import { VOLUME_METER_STOP, VOLUME_METER_START } from './TYPES'

export const volumeMeterStart = () => {
  return {type: VOLUME_METER_START}
}

export const volumeMeterStop = () => {
  return {type: VOLUME_METER_STOP}
}
