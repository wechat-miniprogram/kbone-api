import {validateUrl, getType, addQueryStringToUrl, convertObjectValueToString, urlEncodeFormData} from "../utils/index"
// eslint-disable-next-line
import {AnyObj} from "../api/index.d"


const params = {
    url: "",
    method: "GET",
    dataType: "json",
    responseType: "text",
    header: {
        "content-type": "application/json"
    },
    // eslint-disable-next-line
    success: ({}) => { },
    fail: () => { },
    // eslint-disable-next-line
    complete: ({}) => { },
}

export function request(args:AnyObj = {}) {
    const options = Object.assign({}, params, args)
    let url = options.url
    const method = options.method.toUpperCase()

    if (validateUrl(url) === false) {
        console.error("request", options, `invalid url "${url}"`)
        return undefined
    }

    // 检查 header
    let headers = convertObjectValueToString(options.header)
    headers = Object.keys(headers).reduce((pre: { [key in string]: string }, cur: string) => {
        if (cur.toLowerCase() === "content-type") {
            pre[cur.toLowerCase()] = headers[cur]
        } else {
            pre[cur] = headers[cur]
        }
        return pre
    }, {})

    let responseType = "text"
    if (options.responseType) {
        responseType = options.responseType.toLowerCase()
    }

    let body = options.data
    if (method === "GET" || method === "HEAD") {
        url = addQueryStringToUrl(url, body)
    } else if (typeof body !== "string" && getType(body) !== "ArrayBuffer") {
        if (headers["content-type"].indexOf("application/x-www-form-urlencoded") > -1) {
            body = urlEncodeFormData(body, true)
        } else if (headers["content-type"].indexOf("application/json") > -1 || typeof body === "object") {
            body = JSON.stringify(body)
        } else {
            body = body.toString()
        }
    }

    const result: AnyObj = {}
    return fetch(url, {
        method,
        headers,
        body
    })
        .then((response: Response) => {
            result.statusCode = response.status
            result.header = {}
            response.headers.forEach((val: string, key: string) => {
                result.header[key] = val
            })
            if (response.ok === false) {
                throw response
            }

            if (responseType === "arraybuffer") {
                return response.arrayBuffer()
            }

            if (options.dataType === "json") {
                return response.json()
            }

            if (responseType === "text") {
                return response.text()
            }
            // eslint-disable-next-line
            return Promise.resolve()
        })
        .then((data: string | ArrayBuffer | unknown) => {
            result.data = data
            options.success(result)
            options.complete(result)
            return result
        })
}
