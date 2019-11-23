import { combineReducers } from 'redux';
import { counterReducers } from 'src/basic/reducers/counterReducers'
import { initialState as pingInitialState, pingReducers, PingState } from 'src/basic/reducers/pingReducers'
import { authenticationReducer, AuthenticationState, createInitialState as createAuthState } from 'src/shell/js/authenticationReducers'

export type All = {} & {
  auth: AuthenticationState
  counter: number
  ping: PingState
}  

export const initialState :All=  { 
  auth: createAuthState(''),
  counter: 0,
  ping: pingInitialState  
}

export const reducers = combineReducers( {
  auth: authenticationReducer,
  counter: counterReducers,
  ping: pingReducers
  })
  
  

  
  
  
      