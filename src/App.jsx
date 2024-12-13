import React from 'react'
import './App.css'
import Router from "./router";
import { withRouter } from 'react-router';

const App = () => {
  return <Router/>
}

export default withRouter(App)
