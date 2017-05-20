import React from 'react'

export default class About extends React.Component {
  render () {
    return (
      <section className='about'>
        <h2 className='rbheader'><i className='fa fa-lg fa-user' /> About</h2>
        <div className='divider' />
        {this.props.aboutData}
      </section>
    )
  }
}
