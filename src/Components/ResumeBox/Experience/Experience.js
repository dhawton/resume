import React from 'react'
import ExpItem from './ExpItem/ExpItem'

export default class About extends React.Component {
  render () {
    return (
      <section className='experience'>
        <h2 className='rbheader'><i className='fa fa-lg fa-building-o' /> Experience</h2>
        <div className='divider' />
        {this.props.experienceData.map((row, k) => (
          <ExpItem key={k} rowData={row} />
        ))}
      </section>
    )
  }
}
