import { CounterEvent } from '../actions/CounterSaga'

export function counterReducers(state:number=0, action: CounterEvent): number {
    switch (action.type) {
        case "COUNTER_INCREMENT_SUCCESS": return state + 1
        default: return state
    }
}

