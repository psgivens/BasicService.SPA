import { connect } from 'react-redux';
import * as redux from 'redux';
import { CounterCommand, CounterCommands } from '../basic/actions/CounterSaga';
import * as state from 'src/core/reducers'
// import { ValuesCommands } from 'src/basic/actions/ValuesSaga';
import { PingCommands, PingCommand } from 'src/basic/actions/PingSaga';
import { PingState } from 'src/basic/reducers/pingReducers';

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    counter?: number
    pingResult?:PingState
}
  
export type ConnectedDispatch = {} & {
    authCheck?: () => void
    incrementCounter?:() => void
    ping?: () => void
}

// type internalState = {} & {
//     counter: number
//     values: string []
//   }  
  
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
    return {
        counter: state1.counter,
        pingResult: state1.ping
    } }

const mapDispatchToProps = (dispatch: redux.Dispatch<CounterCommand | PingCommand>): ConnectedDispatch => {
    return {
        authCheck: () => dispatch(PingCommands.authCheck()),
        incrementCounter: () => dispatch(CounterCommands.incrementCounter()),
        ping: () => dispatch(PingCommands.ping())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps, state.All>(mapStateToProps, mapDispatchToProps)
  
