import { takeEvery, call } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'

import { pingApi } from 'src/basic/apis/pingApi'

export type PingCommand = {
    type: "PING_PONG"
} | {
    type: "PING_AUTHCHECK"
}

export const PingCommands = {
    ping: ():PingCommand => ({ type: "PING_PONG" }),
    authCheck: ():PingCommand => ({ type: "PING_AUTHCHECK" })
} 

export type PingEvent = {
    type: "PING_FAILED"
} | {
    type: "PING_PONG_SUCCESS"
    values: string []
} | {
    type: "PING_AUTHCHECK_SUCCESS"
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
        yield takeEvery('PING_PONG', (command:PingCommand) => this.ping(command))
        yield takeEvery('PING_AUTHCHECK', (command:PingCommand) => this.authCheck(command))
    }

    public *ping(action: PingCommand){

        const values = yield call(pingApi.ping)

        yield put( { 
            type: "PING_PONG_SUCCESS",
            values
        } as PingEvent)
    }

    public *authCheck(action: PingCommand){

        const values = yield call(pingApi.authCheck)

        yield put( { 
            type: "PING_AUTHCHECK_SUCCESS",
            values
        } as PingEvent)
    }

}
