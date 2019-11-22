import { PingEvent, ActionItem } from '../actions/PingSaga'

export type PingState = {} & {
    date: Date
    values: string []
    actionItems: ActionItem []
}

export const initialState = {
    actionItems: [],
    date: new Date (),
    values: ["Hello", "World"]
}

export function pingReducers(state:PingState=initialState, action: PingEvent): PingState {
    switch (action.type) {
        case "PING_PONG_SUCCESS": return { 
            date: new Date (),
            values: action.values,
            actionItems: state.actionItems
        }
        case "PING_AUTHCHECK_SUCCESS": return { 
            date: new Date (),
            values: action.values,
            actionItems: state.actionItems
        }
        case "PING_ACTIONITEMS_SUCCESS": return { 
            date: new Date (),
            values: state.values,
            actionItems: action.values
        }
        case "PING_FAILED": return {
            date: new Date (),
            values: action.message.split(' '),
            actionItems: state.actionItems
        }

        default: return state
    }
}

