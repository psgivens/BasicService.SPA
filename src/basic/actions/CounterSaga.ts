import { takeEvery } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'

export type CounterCommand = {
    type: "COUNTER_INCREMENT"
} | {
    type: "COUNTER_DECREMENT"
} 

export const CounterCommands = {
    incrementCounter: ():CounterCommand => ({ type: "COUNTER_INCREMENT" })
} 

export type CounterEvent = {
    type: "COUNTER_INCREMENT_FAILED"
} | {
    type: "COUNTER_INCREMENT_SUCCESS"
}


/************************ SAGA *********************/
export class CounterSaga {
    constructor () {
        this.saga = this.saga.bind(this)
        this.incrementCounter = this.incrementCounter.bind(this)
    }

    /*************** Register listeners ********************/
    public *saga(): Iterator<any> {
        yield takeEvery('COUNTER_INCREMENT', (command:CounterCommand) => this.incrementCounter(command))        
    }

    public *incrementCounter(action: CounterCommand){

        yield put( { 
            type: "COUNTER_INCREMENT_SUCCESS"
        } as CounterEvent)
    }

}
