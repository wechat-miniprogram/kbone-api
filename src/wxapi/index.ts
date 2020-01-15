import {asyncApis} from "./api"

// eslint-disable-next-line
function _promisify(func: ({}) => {}) {
    return (args = {}) =>
        new Promise((resolve, reject) => {
            func(
                Object.assign(args, {
                    success: resolve,
                    fail: reject
                })
            )
        })
}

// eslint-disable-next-line
function hasCallback(args: {[key: string]: any} ) {
    if (!args || typeof args !== "object") return false
    const callback = ["success", "fail", "complete"]
    for (const m of callback) {
        if (typeof args[m] === "function") return true
    }
    return false
}

// eslint-disable-next-line
function PromiseAll(wx: {[key: string]: any} = {}, wxp: {[key: string]: any} = {}){
    Object.keys(wx).forEach(key => {
        const fn = wx[key]
        if (typeof fn === "function" && asyncApis.indexOf(key) >= 0) {
            wxp[key] = (args: {[key: string]: () => {}}) => {
                if (hasCallback(args)) {
                    // 如果已经有 callback,则不走 promise 化
                    fn(args)
                } else {
                    return _promisify(fn)(args)
                }
            }
        } else {
            wxp[key] = fn
        }
    })
}


/**
 * Promise 所有 api，并绑定到 kboneAPI 上
 */
export default function intercetorApi(KboneAPI: object, wx: {[key: string]: any} = {}) {
    PromiseAll(wx, KboneAPI)
}
