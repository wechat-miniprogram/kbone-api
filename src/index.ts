import intercetorApi from "./wxapi/index"
// the actual apis
import * as ProxyApis from "./api/index"
// eslint-disable-next-line
import {AnyObj} from "./api/index.d"
import fakeApis from "./fake/index"
import {ismp} from "./utils/index"
import * as MapContextApi from "./wxapi/mapContext"

/**
 * 1. 当为 mp 环境，将 mp promise 化，覆盖掉当前的 wx api 内容
 * 2. 如果是 h5 环境，则使用 H5 的相关接口实现
 */

const KboneAPI:AnyObj = {}

Object.assign(KboneAPI, ProxyApis, fakeApis, {ismp})

// for Vue
KboneAPI.install = function(Vue: any) {
    Vue.prototype.$api = KboneAPI
}

export default KboneAPI

declare let wx: any

if (ismp) {
    intercetorApi(KboneAPI, wx)
    Object.assign(KboneAPI, MapContextApi)
}
