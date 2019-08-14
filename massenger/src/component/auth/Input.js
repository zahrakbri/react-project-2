import React from 'react'

export default class Input extends React.Component {
  render () {
    return (
      <input type='text' placeholder={this.props.placeholder}
        name={this.props.name}
        onChange={(e) => this.props.PH(e.target.name, e.target.value)}
      />
    )
  }
}
