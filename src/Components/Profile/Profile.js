import React from 'react'
import profilePic from './profile.png'
import './Profile.scss'

export default class Profile extends React.Component {
  render () {
    return (
      <div className='profileBox'>
        <div className='inner'>
          <img src={profilePic} className='profilePic' alt='profile pic' />
          <h1>Daniel A. Hawton</h1>
          <h2>Programmer, Systems Admin,<br />Air Traffic Controller</h2>
          <div className='divider' />
          <span className='contactemail'><i className='fa fa-envelope' /> <a href='mailto:daniel@hawton.org'>daniel@hawton.org</a></span>
          <div className='divider' />
          <ul className='social'>
            <li><a href='https://www.facebook.com/danielhawton'><i className='fa fa-2x fa-facebook-official' /></a></li>
            <li><a href='https://www.github.com/dhawton'><i className='fa fa-2x fa-github' /></a></li>
            <li><a href='https://www.bitbucket.com/dhawton'><i className='fa fa-2x fa-bitbucket' /></a></li>
          </ul>
        </div>
      </div>
    )
  }
}
