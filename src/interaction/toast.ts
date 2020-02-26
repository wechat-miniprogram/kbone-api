import {processCss} from "../utils/index"

/**
 * 初始条件:
 *  1. 通过 render 创建 DOM 节点
 *  2. this.show 显示当前的 Toast 内容
 *  3. this.hide 隐藏当前的 Toast 内容，不删除节点
 */

class Toast {
    maskStyle = {
        left: 0,
        bottom: 0,
        position: "fixed",
        right: 0,
        "z-index": 1000,
        top: 0,
    }

    toastStyle = {
        width: "120px",
        height: "120px",
        top: "40%",
        left: "50%",
        "-webkit-transform": "translate(-50%,-50%)",
        transform: "translate(-50%,-50%)",
        background: "rgba(17,17,17,.7)",
        "border-radius": "5px",
        color: "#fff",
        display: "flex",
        "-webkit-box-direction": "normal",
        "-ms-flex-direction": "column",
        "flex-direction": "column",
        "-webkit-box-align": "center",
        "-ms-flex-align": "center",
        "align-items": "center",
        "-webkit-box-pack": "center",
        "-ms-flex-pack": "center",
        "justify-content": "center",
        "text-align": "center",
        position: "fixed",
        "z-index": 5000,
        "line-height": "1.6",
    }

    successIcon = {
        color: "#fff",
        width: "55px",
        height: "55px",
        display: "block",
        "mask-image": "url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)",
        "-webkit-mask-image": "url(data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M8.657%2018.435L3%2012.778l1.414-1.414%204.95%204.95L20.678%205l1.414%201.414-12.02%2012.021a1%201%200%2001-1.415%200z%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E)",
        "vertical-align": "middle",
        "-webkit-mask-position": "50% 50%",
        "mask-position": "50% 50%",
        "-webkit-mask-repeat": "no-repeat",
        "mask-repeat": "no-repeat",
        "-webkit-mask-size": "100%",
        "mask-size": "100%",
        "background-color": "currentColor",
    }

    loadingIcon = {
        margin: "8px 0",
        width: "38px",
        height: "38px",
        "vertical-align": "baseline",
        display: "inline-block",
        "-webkit-animation": "weuiLoading 1s steps(12) infinite",
        animation: "weuiLoading 1s steps(12) infinite",
        // eslint-disable-next-line
        background: `transparent url("data:image/svg+xml;charset=utf8, %3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 100 100'%3E%3Cpath fill='none' d='M0 0h100v100H0z'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E9E9E9' rx='5' ry='5' transform='translate(0 -30)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23989697' rx='5' ry='5' transform='rotate(30 105.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%239B999A' rx='5' ry='5' transform='rotate(60 75.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23A3A1A2' rx='5' ry='5' transform='rotate(90 65 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23ABA9AA' rx='5' ry='5' transform='rotate(120 58.66 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23B2B2B2' rx='5' ry='5' transform='rotate(150 54.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23BAB8B9' rx='5' ry='5' transform='rotate(180 50 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23C2C0C1' rx='5' ry='5' transform='rotate(-150 45.98 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23CBCBCB' rx='5' ry='5' transform='rotate(-120 41.34 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23D2D2D2' rx='5' ry='5' transform='rotate(-90 35 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23DADADA' rx='5' ry='5' transform='rotate(-60 24.02 65)'/%3E%3Crect width='7' height='20' x='46.5' y='40' fill='%23E2E2E2' rx='5' ry='5' transform='rotate(-30 -5.98 65)'/%3E%3C/svg%3E") no-repeat;`,
        "background-size": "100%",
    }

    customIcon = {
        margin: "8px auto",
        width: "38px",
        height: "38px",
        background: "transparent no-repeat",
        "background-size": "100%"
    }

    titleStyle = {
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "text-align": "center",
    }

    preStyle = `
    @-webkit-keyframes weuiLoading {
        0% {
            transform: rotate3d(0, 0, 1, 0deg);
        }
    
        100% {
            transform: rotate3d(0, 0, 1, 360deg);
        }
    }
    
    @keyframes weuiLoading {
        0% {
            transform: rotate3d(0, 0, 1, 0deg);
        }
    
        100% {
            transform: rotate3d(0, 0, 1, 360deg);
        }
    }
    `
    params = {
        title: "",
        icon: "success",
        image: "",
        duration: 1500,
        mask: false,
        // eslint-disable-next-line
        success: ()=>{},
        // eslint-disable-next-line
        fail: ()=>{},
        // eslint-disable-next-line
        complete: ()=>{}
    }

    wrapper: HTMLDivElement
    toast: HTMLDivElement
    mask: HTMLDivElement
    toastContent: HTMLDivElement
    icon: HTMLElement
    preStyleTag: HTMLStyleElement
    hideTimeout: NodeJS.Timeout

    render(params = {}) {
        const options = Object.assign(
            {}, this.params, params
        )
        this.toast = document.createElement("div")
        this.toast.setAttribute("style", processCss({
            ...this.toastStyle,
            ...(options.icon === "none" ? {
                height: "auto",
                padding: "10px 15px"
            } : {})
        }))

        this.mask = document.createElement("div")
        this.mask.setAttribute("style", processCss(this.maskStyle))
        this.mask.style.display = options.mask ? "block" : "none"

        this.icon = document.createElement("i")
        if (options.image) {
            this.icon.setAttribute("style", processCss({
                ...this.customIcon,
                "background-image": `url(${options.image})`
            }))
        } else {
            switch (options.icon) {
            case "success":
                this.icon.setAttribute("style", processCss(this.successIcon))
                break
            case "loading":
                this.icon.setAttribute("style", processCss(this.loadingIcon))
                break
            case "none":
                this.icon.style.display = "none"
                break
            default:
                break
            }
        }

        this.toastContent = document.createElement("div")
        this.toastContent.textContent = options.title

        this.wrapper = document.createElement("div")
        this.wrapper.style.display = "none"

        // composition Element
        this.toast.appendChild(this.icon)
        this.toast.appendChild(this.toastContent)
        this.wrapper.appendChild(this.mask)
        this.wrapper.appendChild(this.toast)

        document.body.appendChild(this.wrapper)
    }
    /**
     * 给 loading 添加全局动画样式
     */
    preAppendStyles() {
        this.preStyleTag = document.createElement("style")
        this.preStyleTag.textContent = this.preStyle
        document.querySelector("head").appendChild(this.preStyleTag)
    }
    show(params = {}) {
        const options = Object.assign(
            {}, this.params, params
        )

        if (!this.preStyleTag) {
            this.preAppendStyles()
        }

        if (!this.wrapper) {
            this.render(options)
        }

        this.toastContent.textContent = options.title
        this.mask.style.display = options.mask ? "block" : "none"

        if (options.image) {
            this.icon.setAttribute("style", processCss({
                ...this.customIcon,
                "background-image": `url(${options.image})`
            }))
        } else {
            switch (options.icon) {
            case "success":
                this.icon.setAttribute("style", processCss(this.successIcon))
                break
            case "loading":
                this.icon.setAttribute("style", processCss(this.loadingIcon))
                break
            case "none":
                this.icon.style.display = "none"
                break
            default:
                break
            }
        }

        this.toast.setAttribute("style", processCss({
            ...this.toastStyle,
            ...(options.icon === "none" ? {
                height: "auto",
                padding: "10px 15px"
            } : {})
        }))

        this.wrapper.style.display = "block"

        if (options.duration > 0) {
            this.hide(options.duration)
        }

        options.success()
        options.complete()
        return Promise.resolve()
    }
    hide(duration = 1500) {
        if (this.hideTimeout) clearTimeout(this.hideTimeout)
        if (!this.wrapper) return Promise.resolve()
        // eslint-disable-next-line
        return new Promise((resolve,reject) =>{
            this.hideTimeout = setTimeout(() => {
                this.wrapper.style.display = "none"
                resolve()
            }, duration)
        })
    }
}

export default Toast
