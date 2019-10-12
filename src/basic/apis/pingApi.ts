
import * as infra from 'src/infra'


export type PingApi = {} & {
    ping: () => Promise<void | Response>
  }

export type PingResult = {} & {
  values: string[]
}

const ping = infra.unauthFetch ("/api/ping")

export const pingApi: PingApi = {
  ping
}



