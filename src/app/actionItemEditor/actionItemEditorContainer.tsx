// import { connect } from 'react-redux';
// import * as redux from 'redux';
// import { ActionItem, PingCommand, PingCommands } from '../../basic/actions/PingSaga'

// import * as state from '../../basic/reducers/pingReducers'

// // import { PomodoroCommand, PomodoroCommands } from 'src/core/actions/PomodoroSaga';
// // import { CrudlDomainValues } from 'src/core/data/CrudlDomains';
// // import { PomodoroIdb } from 'src/core/data/PomodoroModels';
// // import * as state from 'src/core/reducers/index';
// // import { createCrudlDomainSagaCommands, CrudlSagaCommand } from 'src/jscommon/actions/CrudlSaga';
// // import { CrudlEntity } from 'src/jscommon/data/CrudlDomainCommands';
// // import { CrudlState } from 'src/jscommon/reducers/CrudlReducers';

// /***************************************************************************
//  * Copy, pasted, and modified from jscommons/components/CrudlContainer.tsx
//  ***************************************************************************/

// export type AttributeProps = {} & {
// }
  
// export type StateProps = {} & {
//     item: ActionItem | void,
//     redirect: string | void
// }
  
// export type ConnectedDispatch = {} & {
//     addItem?: (item: ActionItem) => void
// }

// export type SelectSubState = (s:state.All)=>CrudlState
// export const connectContainer = <T extends CrudlEntity, U>(domain:CrudlDomainValues, component: any, select:SelectSubState) => {

//     const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
//         const ios = select(state1)        
//         return {
//             item: ios.selectedItem as PomodoroIdb,
//             redirect: undefined
//         } }
    
//     const mapDispatchToProps = (dispatch: redux.Dispatch<PingCommand>): ConnectedDispatch<T> => {
//         const commands = createCrudlDomainSagaCommands(domain)
//         return {
//             addItem: (item:T) => dispatch(commands.addItem(item)),
//             startPomodoro: (item:PomodoroIdb) => dispatch(PingCommands.start(item)),
//             stopPomodoro: (item:PomodoroIdb) => dispatch(PingCommands.stop(item))
//         }
//     }    

//     return connect<{}, {}, AttributeProps>( 
//         (s: state.All,o:AttributeProps) => mapStateToProps(s,o), 
//         (dispatch: redux.Dispatch<CrudlSagaCommand | PomodoroCommand>) => mapDispatchToProps(dispatch)) 
//         (component)
// } 









import { connect } from 'react-redux';
import * as redux from 'redux';
import { CounterCommand, CounterCommands } from '../../basic/actions/CounterSaga';
import * as state from '../../core/reducers'
// import { ValuesCommands } from 'src/basic/actions/ValuesSaga';
import { PingCommands, PingCommand } from '../../basic/actions/PingSaga'  // '../../src/basic/actions/PingSaga';
import { PingState } from '../../basic/reducers/pingReducers' // 'src/basic/reducers/pingReducers';
import { ActionItem } from '../../basic/actions/PingSaga'

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    actionItem?:ActionItem
}
  
export type ConnectedDispatch = {} & {
    authCheck?: () => void
    causeError?: () => void
    getActionItems?: () => void
    incrementCounter?:() => void
    ping?: () => void
}

// type internalState = {} & {
//     counter: number
//     values: string []
//   }  
  
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => {
    return {
        actionItem: state1.selectedActionItem
    } }

const mapDispatchToProps = (dispatch: redux.Dispatch<CounterCommand | PingCommand>): ConnectedDispatch => {
    return {
        authCheck: () => dispatch(PingCommands.authCheck()),
        causeError: () => dispatch(PingCommands.causeError()),
        getActionItems: () => dispatch(PingCommands.getActionItems()),
        incrementCounter: () => dispatch(CounterCommands.incrementCounter()),
        ping: () => dispatch(PingCommands.ping())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps, state.All>(mapStateToProps, mapDispatchToProps)
  
