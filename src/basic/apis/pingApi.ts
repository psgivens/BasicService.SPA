
import * as infra from 'src/shell/js'
import { ActionItem } from '../actions/PingSaga'


export type PingApi = {} & {
    authCheck: () => Promise<void | Response>
    causeError: () => Promise<void | Response>    
    getActionItems: () => Promise<void | Response>    
    postActionItems: (actionItem:ActionItem) => Promise<void | Response>    
    putActionItems: (id:number) => (actionItem:ActionItem) => Promise<void | Response>    
    ping: () => Promise<void | Response>    
  }

export type PingResult = {} & {
  values: string[]
}

const authCheck = infra.unauthFetch ("/api/authcheck")
const ping = infra.unauthFetch ("/api/ping")
const causeError = infra.unauthFetch ("/api/nonExistent")
const getActionItems = infra.unauthFetch ("/api/actionitems")
const postActionItems = infra.unauthPost ("/api/actionitems")
const putActionItems = (id:number) => infra.unauthPut ("/api/actionitems/" + id)

export const pingApi: PingApi = {
  authCheck,
  causeError,
  getActionItems,
  postActionItems,
  putActionItems,
  ping
}



