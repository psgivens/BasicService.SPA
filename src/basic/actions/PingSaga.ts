import { takeEvery, call } from 'redux-saga/effects'
import { put } from 'redux-saga/effects'

import { pingApi } from 'src/basic/apis/pingApi'

export type ActionItem = {
    completionDate: string | void
    description: string
    dueDate: string | void
    id: number
    modified: string
    state: number
    tags: string | void
    userId: string
}

export type PingCommand = {
    type: "PING_PONG"
} | {
    type: "PING_AUTHCHECK"
} | {
    type: "PING_CAUSEERROR"
} | {
    type: "PING_GETACTIONITEMS"
} | {
    type: "PING_POSTACTIONITEM",
    description: string
} | {
    type: "PING_SELECTACTIONITEM",
    actionItem: ActionItem
}

export const PingCommands = {
    ping: (): PingCommand => ({ type: "PING_PONG" }),
    causeError: (): PingCommand => ({ type: "PING_CAUSEERROR" }),
    getActionItems: (): PingCommand => ({ type: "PING_GETACTIONITEMS" }),
    postActionItem: (description: string): PingCommand => ({ type: "PING_POSTACTIONITEM", description }),
    selectActionItem: (actionItem: ActionItem): PingCommand => ({ type: "PING_SELECTACTIONITEM", actionItem}),
    authCheck: (): PingCommand => ({ type: "PING_AUTHCHECK" })
}

export type PingEvent = {
    type: "PING_FAILED"
    message: string
} | {
    type: "PING_PONG_SUCCESS"
    values: string[]
} | {
    type: "PING_AUTHCHECK_SUCCESS"
    values: string[]
} | {
    type: "PING_ACTIONITEMS_SUCCESS"
    values: ActionItem[]
} | {
    type: "PING_ACTIONITEM_SELECTED",
    actionItem: ActionItem
}

/************************ SAGA *********************/
export class PingSaga {
    constructor() {
        this.saga = this.saga.bind(this)
        this.ping = this.ping.bind(this)
    }

    /*************** Register listeners ********************/
    public *saga(): Iterator<any> {
        yield takeEvery('PING_PONG', (command: PingCommand) => this.ping(command))
        yield takeEvery('PING_AUTHCHECK', (command: PingCommand) => this.authCheck(command))
        yield takeEvery('PING_GETACTIONITEMS', (command: PingCommand) => this.getActionItems(command))
        yield takeEvery('PING_POSTACTIONITEM', (command: PingCommand) => this.postActionItems(command))
        yield takeEvery('PING_SELECTACTIONITEM', (command: PingCommand) => this.selectActionItem(command))
        yield takeEvery('PING_CAUSEERROR', (command: PingCommand) => this.causeError(command))
    }

    public *ping(action: PingCommand) {
        const values = yield call(pingApi.ping)

        if (values) {
            yield put({
                type: "PING_PONG_SUCCESS",
                values
            } as PingEvent)
        } else {
            yield put({
                type: "PING_FAILED",
                message: "Ping failed"
            } as PingEvent)
        }
    }

    public *causeError(action: PingCommand) {

        const values = yield call(pingApi.causeError)

        if (values) {
            yield put({
                type: "PING_FAILED",
                message: "api call did not failed as expected"
            } as PingEvent)
        } else {
            yield put({
                type: "PING_FAILED",
                message: "api call failed as expected"
            } as PingEvent)
        }
    }

    public *authCheck(action: PingCommand) {
        const values = yield call(pingApi.authCheck)

        if (values) {
            yield put({
                type: "PING_AUTHCHECK_SUCCESS",
                values
            } as PingEvent)
        } else {
            yield put({
                type: "PING_FAILED",
                message: "authCheck failed"
            } as PingEvent)
        }
    }

    public *getActionItems(action: PingCommand) {
        const values = yield call(pingApi.getActionItems)

        if (values) {
            yield put({
                type: "PING_ACTIONITEMS_SUCCESS",
                values
            } as PingEvent)
        } else {
            yield put({
                type: "PING_FAILED",
                message: "authCheck failed"
            } as PingEvent)
        }
    }

    public *postActionItems(action: PingCommand) {
        if (action.type === "PING_POSTACTIONITEM") {
            // const valuesx = 
            yield call(pingApi.postActionItems,
                {
                    completionDate: undefined,
                    description: action.description,
                    dueDate: undefined,
                    id: 0,
                    modified: "",
                    state: 0,
                    tags: undefined,
                    userId: ""
                });

            const values = yield call(pingApi.getActionItems)

            if (values) {
                yield put({
                    type: "PING_ACTIONITEMS_SUCCESS",
                    values
                } as PingEvent)
            } else {
                yield put({
                    type: "PING_FAILED",
                    message: "authCheck failed"
                } as PingEvent)
            }
        }
    }

    public *selectActionItem(action: PingCommand) {
        if (action.type === 'PING_SELECTACTIONITEM') {
            yield put ({
                type: 'PING_ACTIONITEM_SELECTED',
                actionItem: action.actionItem
            } as PingEvent)
        }
    }

}
