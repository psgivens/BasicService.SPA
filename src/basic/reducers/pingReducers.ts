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
        case "PING_PONG_SUCCESS": return { 
            date: new Date (),
            values: action.values
        }
        case "PING_AUTHCHECK_SUCCESS": return { 
            date: new Date (),
            values: action.values
        }
        case "PING_FAILED": return {
            date: new Date (),
            values: action.message.split(' ')
        }

        default: return state
    }
}

