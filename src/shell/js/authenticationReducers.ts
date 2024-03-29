// import { AuthenticationEvent, AuthHeaderClaims, AuthPayloadClaims } from 'src/jscommon/actions/AuthenticationSaga'

export type AuthenticationState = {} & {
    isAuthenticated: boolean
    scopes: string[]
    token: string
    // headerClaims: AuthHeaderClaims | void
    // payloadClaims: AuthPayloadClaims | void
}

export const createInitialState = (accessToken:string): AuthenticationState => 
    accessToken ? { 
        // headerClaims: undefined,
        isAuthenticated: true,
        // payloadClaims: undefined,
        scopes: [],
        token: accessToken
    } : {
        // headerClaims: undefined,
        isAuthenticated: false,
        // payloadClaims: undefined,
        scopes: [],
        token: ""
    }    

export type AuthenticationEvent = {
        type: "AUTHN_LOGGEDIN"    
        scopes: string[]
        token: string
        // headerClaims?: AuthHeaderClaims
        // payloadClaims?: AuthPayloadClaims
    } | {
        type: "AUTHN_LOGGEDOUT"
    } | {
        type: "AUTHN_LOGINFAILED"
    } 
    

export const initialState:AuthenticationState = createInitialState('')
export const authenticationReducer = (state:AuthenticationState = initialState, action: AuthenticationEvent): AuthenticationState =>   
    {
        switch(action.type) {            
            case "AUTHN_LOGGEDIN":
                return { 
                    // headerClaims: action.headerClaims,                    
                    isAuthenticated:true, 
                    // payloadClaims: action.payloadClaims,
                    scopes: action.scopes, 
                    token: action.token
                }
            case "AUTHN_LOGGEDOUT":
                return createInitialState('')
            case "AUTHN_LOGINFAILED":
                return initialState
        }
        return state
    }

