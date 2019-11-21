import React from 'react';
import App from './App';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

const NavBar: React.FC = () => {
    return (
      <>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="my-important-menu" href="/" >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu" id="my-important-menu">
            <div className="navbar-end">
              <a className="navbar-item" href="/Demo">Demo</a>
              <a className="navbar-item" href="/">Home</a>
            </div>
          </div>
        </nav>
      </>
    )
  }

  const AppRouteTable: React.SFC<{}> = () => {
    return (
      <Router>
        <>
          <Switch>
            <Route path="/Home" component={App} />
            {/* <Route path="/Demo" component={Demo} /> */}
            {/* <Route path="/Login" component={ Login } />
            <Route path="/BladeDemo" component={ BladeDemo } /> */}
            <Route path="/" component={App} />
          </Switch>
        </>
      </Router>)}

  export { NavBar, AppRouteTable }