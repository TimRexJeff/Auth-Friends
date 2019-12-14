import React from 'react'
import { Link, Route } from 'react-router-dom'
import Signin from "./Signin"
import './App.css'

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/signin">Sign In</Link>
      </nav>

      <Route exact path="/signin" component={Signin} />
    </div>
  )
}