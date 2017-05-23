import React from 'react'
import PropTypes from 'prop-types'

import ReactGA from 'react-ga'

import Profile from './Components/Profile/Profile'
import ResumeBox from './Components/ResumeBox/ResumeBox'

import './App.scss'

ReactGA.initialize('UA-99576902-1', { debug: true })
ReactGA.pageview(window.location.pathname)

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
