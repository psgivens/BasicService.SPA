import { AuthenticationState } from './authenticationReducers';
import * as reducers from 'src/core/reducers'
import { ActionItem } from 'src/basic/actions/PingSaga';

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

            // TODO: Get and set this dynamically through authFetch
            "user_id": "e727c9b6-5498-405c-aafc-bf8d8e8fb61d",
            "transaction_id": "5047e2e0-2f03-46b4-82a0-216e180dea4f"
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


export const unauthPost = (url:string) => (actionItem:ActionItem): Promise<Response> => {
    // const url = "/api/values"
    return fetch("http://localhost:2003" + url, {        
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached        
        // credentials: "same-origin", // include, same-origin, *omit
        headers: {
            // "Authorization": 'Bearer ' + authState.token,
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",

            // TODO: Get and set this dynamically through authFetch
            "user_id": "e727c9b6-5498-405c-aafc-bf8d8e8fb61d",
            "transaction_id": "5047e2e0-2f03-46b4-82a0-216e180dea4f"
        },
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(actionItem), // body data type must match "Content-Type" header
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





