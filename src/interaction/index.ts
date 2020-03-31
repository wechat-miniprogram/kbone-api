import Toast from "./toast"
import Modal from "./modal"
import ActionSheet from "./actionsheet"
import {ismp} from "../utils/index"

const toast = new Toast()
const modal = new Modal()
const actionSheet = new ActionSheet()

if (!ismp) {
    // 非 mp 状态下，先创建 actinoSheet 节点，准备动画
    actionSheet.render()
}

export function showToast(options = {}) {
    return toast.show(options)
}
// eslint-disable-next-line
export async function hideToast(options: { [key: string]: any } = {}) {
    await toast.hide(0);
    (typeof options.success === "function") && options.success()
    (typeof options.complete === "function") && options.complete()
}


export function showModal(options = {}) {
    return modal.show(options)
}

export function showLoading(options:{[key in string]: any} = {}) {
    options.duration = 0
    options.icon = "loading"
    return toast.show(options)
}

export async function hideLoading(options: { [key: string]: any } = {}) {
    await toast.hide(0);
    (typeof options.success === "function") && options.success()
    (typeof options.complete === "function") && options.complete()
}

export function showActionSheet(options = {}) {
    return actionSheet.show(options)
}
