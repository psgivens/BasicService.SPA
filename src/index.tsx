import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux'
import { reducers } from './basic/reducers'
import * as state from './basic/reducers'
import { CounterSaga } from './basic/actions/CounterSaga'

const initialState = { 
  counter: 0
}

const sagaMiddleware = createSagaMiddleware()
const store: ReduxStore<state.All> = createStore(reducers, initialState, applyMiddleware(sagaMiddleware))
const counterSaga = new CounterSaga()
sagaMiddleware.run(counterSaga.saga)

// Replaced: ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('root') as HTMLElement
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
