
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
    postActionItem?: (description:string) => void
    getActionItems?: () => void
    deselectItem?: () => void
}

 
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => 
    ({
        selectedActionItem: state1.ping.selectedItem
    })

const mapDispatchToProps = (dispatch: redux.Dispatch<PingCommand>): ConnectedDispatch => {
    return {
        postActionItem: (description:string) => dispatch(PingCommands.postActionItem(description)),
        getActionItems: () => dispatch(PingCommands.getActionItems()),
        deselectItem: () => dispatch(PingCommands.deselectActionItem())
    }
}    

export const connectContainer = 
    connect<StateProps, ConnectedDispatch, AttributeProps, state.All>(
        mapStateToProps, mapDispatchToProps)
  
