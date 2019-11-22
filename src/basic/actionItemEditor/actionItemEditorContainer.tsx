
import { connect } from 'react-redux';
import * as redux from 'redux';
import * as state from '../../core/reducers'
import { PingCommands, PingCommand, ActionItem } from '../actions/PingSaga'  

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    // id: number
    // description: string
}
  
export type ConnectedDispatch = {} & {
    postActionItem?: (description:string) => void
    getActionItems?: () => void
    selectItem?: (actionItem:ActionItem) => void
}

// type internalState = {} & {
//     counter: number
//     values: string []
//   }  
  
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => 
    state1.ping.selectedItem ? {
        id: state1.ping.selectedItem!.id,
        description: state1.ping.selectedItem!.description
    } : {
        id: 0,
        description: ""
    } 

const mapDispatchToProps = (dispatch: redux.Dispatch<PingCommand>): ConnectedDispatch => {
    return {
        postActionItem: (description:string) => dispatch(PingCommands.postActionItem(description)),
        getActionItems: () => dispatch(PingCommands.getActionItems())
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps, state.All>(mapStateToProps, mapDispatchToProps)
  
