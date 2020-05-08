import React from 'react'
import './App.css'
import Home from './components/Home'
import UsersContainer from './components/UsersContainer'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Home />
        <UsersContainer />
      </>
    )
  }
}