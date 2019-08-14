import React from 'react'
import logo from '../../logo.svg'
import { Link } from 'react-router-dom'
import Input from './Input'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      retypePassword: ''
    }

    this.ParentHandler = this.ParentHandler.bind(this)
  }

  ParentHandler (name, value) {
    console.log('ParentHandler', name, value)
    this.setState({ [name]: value })
  }

  render () {
    console.log('state', this.state)    
    return (
      <div className='container'>
        <div className='loginPage'>
          <img src={logo} width='50px' style={{ alignSelf: 'center' }} />
          <Input placeholder='email' name='email' PH={this.ParentHandler} />
          <Input placeholder='password' name='password' PH={this.ParentHandler} />
          <Input placeholder='password' name='retypePassword' PH={this.ParentHandler} />

          <button onClick={() => this.handleError()} >
            <Link to='/messenger/'>Sign Up</Link>
          </button>
        </div>
      </div>
    )
  }
}
