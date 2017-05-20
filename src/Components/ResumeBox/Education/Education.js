import React from 'react'
import './Education.scss'

export default class Education extends React.Component {
  render () {
    return (
      <div>
        <section className='education'>
          <h2 className='rbheader'><i className='fa fa-lg fa-graduation-cap' /> Education</h2>
          <div className='divider' />
          {this.props.education.map((ed, k) => (
            <p key={k}>{ed.institution}, {ed.studyType} in {ed.area}</p>
        ))}
        </section>
        <section className='certifications'>
          <h2 className='rbheader'><i className='fa fa-lg fa-certificate' /> Certifications</h2>
          <div className='divider' />
          {this.props.certifications.map((cert, k) => (
            <p key={k}>{cert}</p>
        ))}
        </section>
      </div>
    )
  }
}
