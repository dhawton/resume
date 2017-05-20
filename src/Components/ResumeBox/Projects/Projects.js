import React from 'react'
import './Projects.scss'

export default class Projects extends React.Component {
  render () {
    return (
      <section className='projects'>
        <h2 className='rbheader'><i className='fa fa-lg fa-archive' /> Projects</h2>
        <div className='divider' />
        <div className='projectBox'>
          {this.props.projects.map((proj, key) => (
            <div className='projbox' key={key}>
              <img src={proj.image} alt={proj.name} />
              <div className='projdetail'>
                <h2>{proj.name}</h2>
                <p><a href={proj.url} target='_blank'>{proj.url}</a></p>
                {(proj.src !== '') ? <p><a href={proj.src} target='_blank'>Source</a></p> : <p>Closed source</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}
