
import * as infra from 'src/shell/js'


export type PingApi = {} & {
    authCheck: () => Promise<void | Response>
    causeError: () => Promise<void | Response>    
    getActionItems: () => Promise<void | Response>    
    ping: () => Promise<void | Response>    
  }

export type PingResult = {} & {
  values: string[]
}

const authCheck = infra.unauthFetch ("/api/authcheck")
const ping = infra.unauthFetch ("/api/ping")
const causeError = infra.unauthFetch ("/api/nonExistent")
const getActionItems = infra.unauthFetch ("/api/actionitems")

export const pingApi: PingApi = {
  authCheck,
  causeError,
  getActionItems,
  ping
}



