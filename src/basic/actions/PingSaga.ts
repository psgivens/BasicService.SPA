import { takeEvery, call } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'

import { pingApi } from 'src/basic/apis/pingApi'

export type PingCommand = {
    type: "PING"
} 

export const PingCommands = {
    ping: ():PingCommand => ({ type: "PING" })
} 

export type PingEvent = {
    type: "PING_FAILED"
} | {
    type: "PING_SUCCESS"
    values: string []
}


/************************ SAGA *********************/
export class PingSaga {
    constructor () {
        this.saga = this.saga.bind(this)
        this.ping = this.ping.bind(this)
    }

    /*************** Register listeners ********************/
    public *saga(): Iterator<any> {
        yield takeEvery('PING', (command:PingCommand) => this.ping(command))
    }

    public *ping(action: PingCommand){

        const values = yield call(pingApi.ping)

        yield put( { 
            type: "PING_SUCCESS",
            values
        } as PingEvent)
    }

}
