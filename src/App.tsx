import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'src/shell/css/Styles.css'

import { connectContainer } from './appComponent/appContainer'
import * as container from  './appComponent/appContainer'


import 'src/shell/css/App.css'

// import  './App.css'


type ThisProps = 
  container.StateProps
  & container.ConnectedDispatch
  & container.AttributeProps


const onButtonPress = (action: ()=>void) => (event: React.SyntheticEvent<HTMLButtonElement>):void => {
    event.preventDefault()
    action()
  }

const App: React.FC<ThisProps> = ( props:ThisProps) => {
  return (
    <>
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
                {props.pingResult!.values.map (value => {
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

export default connectContainer(App)
