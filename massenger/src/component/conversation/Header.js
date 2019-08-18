import React from 'react'

class Header extends React.Component {
  render () {
    console.log('ppppp', this.props)
    return (
      <div className='header'>
        {this.props.firstName} {this.props.lastName}
      </div>
    )
  }
}

export default Header
