import { PingEvent } from '../actions/PingSaga'

export type PingState = {} & {
    date: Date
    values: string []
}

export const initialState = {
    date: new Date (),
    values: ["Hello", "World"]
}

export function pingReducers(state:PingState=initialState, action: PingEvent): PingState {
    switch (action.type) {
        case "PING_SUCCESS": return { 
            date: new Date (),
            values: action.values
        }
        default: return state
    }
}

