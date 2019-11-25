
import { connect } from 'react-redux';
import * as redux from 'redux';
import * as state from '../../core/reducers'
import { PingCommands, PingCommand, ActionItem } from '../actions/PingSaga'  

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    selectedActionItem: ActionItem | void
}
  
export type ConnectedDispatch = {} & {
    postActionItem?: (actionItem:ActionItem) => void
    getActionItems?: () => void
    deselectItem?: () => void
}

 
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => 
    ({
        selectedActionItem: state1.ping.selectedItem
    })

const mapDispatchToProps = (dispatch: redux.Dispatch<PingCommand>): ConnectedDispatch => {
    return {
        postActionItem: (actionItem:ActionItem) => dispatch(PingCommands.postActionItem(actionItem)),
        getActionItems: () => dispatch(PingCommands.getActionItems()),
        deselectItem: () => dispatch(PingCommands.deselectActionItem()),
    }
}    

export const connectContainer = 
    connect<StateProps, ConnectedDispatch, AttributeProps, state.All>(
        mapStateToProps, mapDispatchToProps)
  
