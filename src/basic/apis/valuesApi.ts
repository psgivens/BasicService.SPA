
import * as infra from 'src/infra'
import { AuthenticationState } from 'src/infra/authenticationReducers'


export type ValuesApi = {} & {
    getValues: (auth:AuthenticationState) => Promise<void | Response>
  }

export type GetValuesResult = {} & {
  values: string[] 
}

const getValues = infra.authFetch ("/api/values")

export const valuesApi: ValuesApi = {
  getValues
}



