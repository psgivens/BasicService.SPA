import { PingEvent, ActionItem } from '../actions/PingSaga'

export type PingState = {} & {
    date: Date
    values: string []
    actionItems: ActionItem []
    selectedItem: ActionItem | void
}

export const initialState :PingState= {
    actionItems: [],
    date: new Date (),
    values: ["Hello", "World"],
    selectedItem: undefined
}

export function pingReducers(state:PingState=initialState, action: PingEvent): PingState {
    switch (action.type) {
        case "PING_PONG_SUCCESS": return { 
            ...state,
            date: new Date (),
            values: action.values,
        }
        case "PING_AUTHCHECK_SUCCESS": return { 
            ...state,
            date: new Date (),
            values: action.values,
        }
        case "PING_ACTIONITEMS_SUCCESS": return { 
            ...state,
            date: new Date (),
            actionItems: action.values
        }
        case "PING_FAILED": return {
            ...state,
            date: new Date (),
            values: action.message.split(' '),
        }
        case "PING_ACTIONITEM_SELECTED": return {
            ...state,
            selectedItem: action.actionItem
        }

        default: return state
    }
}

