
import { connect } from 'react-redux';
import * as redux from 'redux';
import * as state from '../../core/reducers'
import { PingCommands, PingCommand, ActionItem } from '../actions/PingSaga'  

export type AttributeProps = {} & {
}
  
export type StateProps = {} & {
    actionItems?: ActionItem []
}
  
export type ConnectedDispatch = {} & {
    selectItem?: (item:ActionItem) => void
}

 
const mapStateToProps = (state1: state.All, ownProps: AttributeProps): StateProps => 
    ({
        actionItems: state1.ping.actionItems
    })

const mapDispatchToProps = (dispatch: redux.Dispatch<PingCommand>): ConnectedDispatch => {
    return {
        selectItem: (item:ActionItem) => dispatch(PingCommands.selectActionItem(item))
    }
}    

export const connectContainer = 
    connect<{}, {}, AttributeProps, state.All>(mapStateToProps, mapDispatchToProps)
  
