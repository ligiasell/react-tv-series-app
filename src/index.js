import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()

// const getCurrentDate = () => {
//   const date = new Date()
//   return date.toDateString()
// }
// const greeting = <h1>Hello World! Current date: {getCurrentDate()}</h1>
// // const greeting = React.createElement('h1', {}, 'Hello World')

// ReactDOM.render(greeting, document.getElementById('root'))
// serviceWorker.unregister()
