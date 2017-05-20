import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import resumeJSON from './data/resume'

ReactDOM.render(
  <App resumeJSON={resumeJSON} />,
  document.getElementById('root')
)
