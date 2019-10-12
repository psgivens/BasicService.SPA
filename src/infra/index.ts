import { AuthenticationState } from './authenticationReducers';
import * as reducers from 'src/core/reducers'

export const authSagaQuery = (state:reducers.All): string => state.auth ? state.auth.token : ""

export const authFetch = (url:string) => (authState:AuthenticationState): Promise<Response> => {
    // const url = "/api/values"
    return fetch(url, {        
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached        
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            // "Authorization": 'Bearer ' + authState.token,
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => response.json()) // parses response to JSON
    .catch(error => {
        // TODO: Do something with the error
      // console.error("Error fetching " + url)
      // console.error(`Fetch Error =\n`, error)      
    });
};

export const unauthFetch = (url:string) => (): Promise<Response> => {
    // const url = "/api/values"
    return fetch("http://localhost:2003" + url, {        
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached        
        // credentials: "same-origin", // include, same-origin, *omit
        headers: {
            // "Authorization": 'Bearer ' + authState.token,
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        // body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => {
        console.error("Parsing")
        console.error(response)
    return    response.json()
    }) // parses response to JSON
    .catch(error => {
        // TODO: Do something with the error
      console.error("Error fetching " + url)
      console.error(`Fetch Error =\n`, error)      
    });
};
