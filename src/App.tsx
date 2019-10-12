import React from 'react';
import logo from './logo.svg';
import './App.css';

import { connectContainer } from './appComponent/appContainer'
import * as container from  './appComponent/appContainer'

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
    <div className="App">
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
      </header>
      button:
      <button onClick={onButtonPress(props.incrementCounter!)} >click me!</button>
    </div>
  );
}

export default connectContainer(App)
