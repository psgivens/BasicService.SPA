import React from 'react';
import logo from './logo.svg';
import 'src/shell/css/sample.css'
import './App.css';
import 'src/shell/css/Styles.css'

import { connectContainer } from './appComponent/appContainer'
import * as container from './appComponent/appContainer'



type ThisProps =
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps


const onButtonPress = (action: () => void) => (event: React.SyntheticEvent<HTMLButtonElement>): void => {
  event.preventDefault()
  action()
}

const App: React.FC<ThisProps> = (props: ThisProps) => {
  return (
    <>


      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            
              <a role="button" className="navbar-burger" href="/" aria-label="menu" aria-expanded="false" data-target="my-important-menu" >
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
                  <span aria-hidden="true" />
              </a>
          </div>
          <div className="navbar-menu" id="my-important-menu">
              <div className="navbar-end"><a className="navbar-item" href="/">Home</a><a className="navbar-item" href="/Login">Login</a></div>
          </div>
      </nav>

      <div id='authenticated'>
        <aside id="sidebar">
          This is a navbar
        </aside>
        <div className="appcontent">
          <div className="App blade">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn Reacts {props.counter!}
              </a>
              <p>
                {props.pingResult!.date.toString()}
              </p>
              <p>
                <ul>
                  {props.pingResult!.values.map(value => {
                    return (
                      <li>
                        {value}
                      </li>
                    )
                  })}
                </ul>
              </p>

            </header>
          </div>
        </div>
      </div>
      <aside id="statusbar">
        <button onClick={onButtonPress(props.incrementCounter!)} >Increment!</button>
        <button onClick={onButtonPress(props.causeError!)} >Ping Error!</button>
        <button onClick={onButtonPress(props.ping!)} >Ping!</button>
        <button onClick={onButtonPress(props.authCheck!)} >Auth Check!</button>
      </aside>
    </>
  );
}


document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( (el:any) => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target:any = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default connectContainer(App)
