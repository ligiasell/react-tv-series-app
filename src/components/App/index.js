import React, { Component } from 'react'
import Intro from '../Intro'
import Series from '../../containers/Series'
import './App.css'
import 'whatwg-fetch'

class App extends Component {
  // componentDidMount() {
  //   const series = ['Vikings', 'Game of Thrones']
  //   setTimeout(() => {
  //     this.setState({ series })
  //   }, 2000)}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">TV Series List</h1>
          <Intro message="Here you can find all your most loved series" />
          <Series />
        </header>
      </div>
    )
  }
}

export default App
