import React from 'react'
import './Skills.scss'

export default class Skills extends React.Component {
  render () {
    return (
      <section className='skills'>
        <h2 className='rbheader'><i className='fa fa-lg fa-gears' /> Skills</h2>
        <div className='divider' />
        <ul>
          {this.props.skillsData.map((skill, k) => (
            <li><span className='skill' key={k}>{skill}</span></li>
          ))}
        </ul>
      </section>
    )
  }
}
