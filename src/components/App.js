'use strict'

import React from 'react'
import { Recorder } from 'react-recorder-redux'
import VolumeMeter from '../containers/VolumeMeter'
import StartButton from '../containers/StartButton'
import StopButton from '../containers/StopButton'

const AudioContext = window.AudioContext || window.webkitAudioContext
const audioCtx = new AudioContext()

const App = () => (
  <div>
    <Recorder />
    <VolumeMeter width={300} height={200} audioContext={audioCtx} />
    <StartButton text='Start' />
    <StopButton text='Stop' />
  </div>
)

export default App
