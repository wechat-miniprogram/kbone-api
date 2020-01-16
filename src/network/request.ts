import jsonpRetry from 'jsonp-retry'
import 'whatwg-fetch'

const params = {
    method: "GET",
    dataType: "json",
    responseType: "text",
    header: {
        "content-type": "application/json"
    },
    success: () => {},
    fail: () => {},
    complete: () => {},
}

export function request(options = {}) {
    

}
