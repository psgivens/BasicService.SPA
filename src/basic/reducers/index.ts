import { combineReducers } from 'redux';
import { counterReducers } from './counterReducers';

export type All = {} & {
  counter: number
}  

export const initialState =  { 
  counter: 0
}

export const reducers = combineReducers( {
  counter: counterReducers
  })
  
  