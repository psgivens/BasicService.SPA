import { connect } from 'react-redux';
import * as redux from 'redux';
import { CounterCommand, CounterCommands } from '../basic/actions/CounterSaga';
import * as state from '../basic/reducers'

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    counter?: number
}
  
export type ConnectedDispatch = {} & {
    incrementCounter?:() => void
}

type internalState = {} & {
    counter: number
    values: string []
  }  
  
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
    return {
        counter: state1.counter
    } }

const mapDispatchToProps = (dispatch: redux.Dispatch<CounterCommand>): ConnectedDispatch => {
    return {
        incrementCounter: () => dispatch(CounterCommands.incrementCounter())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps, state.All>(mapStateToProps, mapDispatchToProps)
  
