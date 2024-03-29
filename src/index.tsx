import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore, Store as ReduxStore } from 'redux'
import { reducers } from 'src/core/reducers'
import * as state from 'src/core/reducers'
import { CounterSaga } from 'src/basic/actions/CounterSaga'
import { PingSaga } from 'src/basic/actions/PingSaga'
import { AppRouteTable } from 'src/app/NavBar';

const sagaMiddleware = createSagaMiddleware()
const store: ReduxStore<state.All> = createStore(reducers, state.initialState, applyMiddleware(sagaMiddleware))
const counterSaga = new CounterSaga()
sagaMiddleware.run(counterSaga.saga)
const pingSaga = new PingSaga()
sagaMiddleware.run(pingSaga.saga)

// Replaced: ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}><AppRouteTable /></Provider>,
    document.getElementById('root') as HTMLElement
  )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
