import React from 'react'
import './App.css'
import Home from './components/Home'

export default class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(response => console.log(response.json()))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Home />
    )
  }
}