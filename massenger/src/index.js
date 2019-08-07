import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// const name = 'getElementByIdWorld'
// const element = <div>
//   <h1> Hello {name} </h1>
//   <p> Hello {name} </p>
// </div>

// function Welcome() {
//   return (
//     <div>
//       <h1> Welcome </h1>
//       <p> Hello {name} </p>
//     </div>
//   )
// }

// class MyComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Welcome </h1>
//         <p> Hello {name} </p>
//       </div>
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
