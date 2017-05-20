import React from 'react'
import PropTypes from 'prop-types'
import './ResumeBox.scss'

import About from './About/About'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'

export default class ResumeBox extends React.Component {
  render () {
    console.dir(this.props.resumeJSON)
    return (
      <div className='resumeBox'>
        <About aboutData={this.props.resumeJSON.about} />
        <Experience experienceData={this.props.resumeJSON.work} />
        <Skills skillsData={this.props.resumeJSON.skills} />
        <Education education={this.props.resumeJSON.education} certifications={this.props.resumeJSON.certifications} />
      </div>
    )
  }
}

ResumeBox.propTypes = {
  resumeJSON: PropTypes.object.isRequired
}
