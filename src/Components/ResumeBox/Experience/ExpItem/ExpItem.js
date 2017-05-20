import React from 'react'
import './ExpItem.scss'

export default class ExpItem extends React.Component {
  render () {
    return (
      <div className='expItem'>
        <h3>{this.props.rowData.position}, <span>{this.props.rowData.company}</span></h3>
        <p>{this.props.rowData.startDate} - {(this.props.rowData.endDate !== '') ? this.props.rowData.endDate : 'Present'}</p>
        <p>Website: <a href={this.props.rowData.website}>{this.props.rowData.website}</a></p>
        <p className='summary'>{this.props.rowData.summary}</p>
      </div>
    )
  }
}
