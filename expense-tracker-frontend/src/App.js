import React from 'react'
import logo from './logo.svg'
import './App.css'

export default class App extends React.Component {
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(response => console.log(response.json()))
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    )
  }
}