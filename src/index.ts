import intercetorApi from "./wxapi/index"
import * as ProxyApis from "./api/index"
import {ismp} from "./utils/index"

/**
 * 1. 当为 mp 环境，将 mp promise 化，覆盖掉当前的 wx api 内容
 * 2. 如果是 h5 环境，则使用 H5 的相关接口实现
 */

const KboneAPI = {}

Object.assign(KboneAPI, ProxyApis)

export default KboneAPI

declare let wx: any

if (ismp) {
    intercetorApi(KboneAPI, wx)
}
