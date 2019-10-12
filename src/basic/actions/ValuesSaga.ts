import { select, takeEvery } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import * as reducers from 'src/core/reducers'
import { valuesApi } from '../apis/valuesApi'
import * as infra from 'src/infra'
import { AuthenticationState } from 'src/infra/authenticationReducers'

export type ValuesCommand = {
    type: "VALUES_DUMMY"
} | {
    type: "VALUES_GET_STRINGS"
} 

export const ValuesCommands = {
    getValues: ():ValuesCommand => ({ type: "VALUES_GET_STRINGS" })
} 

export type ValuesEvent = {
    type: "VALUES_FAILED"
} | {
    type: "VALUES_SUCCESS_STRINGS"
    values: string[]
}

/************************ SAGA *********************/


export class ValuesSaga {
    constructor () {
        this.saga = this.saga.bind(this)
        this.getValues = this.getValues.bind(this)
    }

    /*************** Register listeners ********************/
    public *saga(): Iterator<any> {
        yield takeEvery('VALUES_GET_STRINGS', (command:ValuesCommand) => this.getValues(command))        
    }

    public *getValues(action: ValuesCommand){

        const authState:AuthenticationState = yield select(infra.authSagaQuery)
        const values = yield call(valuesApi.getValues, authState)

        // tslint:disable-next-line:no-console
        console.log(values)

        yield put( { 
            type: "VALUES_SUCCESS_STRINGS",
            values
        } as ValuesEvent)
    }

}
