import React from 'react'
import PropTypes from 'prop-types'

import Profile from './Components/Profile/Profile'
import ResumeBox from './Components/ResumeBox/ResumeBox'

import './App.scss'

const App = (props) => (
  <div className='resume'>
    <Profile resumeJSON={props.resumeJSON} />
    <ResumeBox resumeJSON={props.resumeJSON} />
  </div>
)

App.propTypes = {
  resumeJSON: PropTypes.object.isRequired
}

export default App
