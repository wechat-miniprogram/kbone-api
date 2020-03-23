import asyncApis from "./asyncApis"
import noopApis from "./noopApis"
import * as syncApis from "./syncApis"


const apis = Object.assign({}, asyncApis, noopApis, syncApis)

export default apis
