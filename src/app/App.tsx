import React from 'react';
import logo from './logo.svg';

import { NavBar } from './NavBar';

import 'src/skin/css/sample.css';
import 'src/skin/css/AppColors.css';
import 'src/skin/css/App.css';
import 'src/skin/css/AppLargeScreens.css';
import 'src/skin/css/AppSmallScreens.css';

import { connectContainer } from './appComponent/appContainer'
import * as container from './appComponent/appContainer'

import ActionItemEditor from './ActionItemEditor';


type ThisProps =
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps


const onButtonPress = (action: () => void) => (event: React.SyntheticEvent<HTMLButtonElement>): void => {
  event.preventDefault()
  action()
}
const listingsStyle = {
  width: '300px'
}
const App: React.FC<ThisProps> = (props: ThisProps) => {
  return (
    <>

      <NavBar />

      {/* <nav className="navbar" role="navigation" aria-label="main navigation">
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
      </nav> */}

      <div id='main'>
        <aside id="sidebar1" className="sidebar" >
          This is a navbar
        </aside>

        <div className="blade" style={listingsStyle}>
          <div className="blade-title">
            Action Items
          </div>
          <div className="blade-body">

            {props.pingResult!.actionItems.map(value => {
              return (
                <div key={value.id} className="list-item" >
                  {value.description}
                </div>
              )
            })}
          </div>
        </div>

        <ActionItemEditor />
        
        <div className="App blade">
          <div id="actionbar">
            <button onClick={onButtonPress(props.incrementCounter!)} >Increment!</button>
            <button onClick={onButtonPress(props.causeError!)} >Ping Error!</button>
            <button onClick={onButtonPress(props.ping!)} >Ping!</button>
            <button onClick={onButtonPress(props.authCheck!)} >Auth Check!</button>
            <button onClick={onButtonPress(props.getActionItems!)} >Get Action Items!</button>
          </div>
          <div className="blade-body">
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
              <p>
                Action Items

                {/* {props.pingResult!.actionItems} */}

                {props.pingResult!.actionItems.map(value => {
                  return (
                    <div key={value.id}>
                      item
                        {value.description}
                    </div>
                  )
                })}
              </p>
            </header>
          </div>
        </div>
      </div>
      <aside id="statusbar">
        No status at this time
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
    $navbarBurgers.forEach((el: any) => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target: any = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

export default connectContainer(App)
