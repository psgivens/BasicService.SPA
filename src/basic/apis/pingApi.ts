
import * as infra from 'src/infra'


export type PingApi = {} & {
    authCheck: () => Promise<void | Response>
    ping: () => Promise<void | Response>    
  }

export type PingResult = {} & {
  values: string[]
}

const authCheck = infra.unauthFetch ("/api/authcheck")
const ping = infra.unauthFetch ("/api/ping")

export const pingApi: PingApi = {
  authCheck,
  ping
}



