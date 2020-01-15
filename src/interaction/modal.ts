import {processCss} from "../utils/index"

/**
 * 用来对齐 wx.showModal API
 */

export default class Modal {
    maskStyle = {
        left: 0,
        bottom: 0,
        position: "fixed",
        right: 0,
        "z-index": 1000,
        top: 0,
        background: "rgba(0, 0, 0, 0.6)",
    }

    dialogStyle = {
        width: "320px",
        margin: "0 auto",
        position: "fixed",
        "z-index": 5000,
        top: "50%",
        left: "16px",
        right: "16px",
        "-webkit-transform": "translate(0, -50%)",
        transform: "translate(0, -50%)",
        "background-color": "#FFFFFF",
        "text-align": "center",
        "border-radius": "12px",
        overflow: "hidden",
        display: "flex",
        "-webkit-box-orient": "vertical",
        "-webkit-box-direction": "normal",
        "-ms-flex-direction": "column",
        "flex-direction": "column",
    }

    titleStyle = {
        "font-weight": 700,
        "font-size": "17px",
        "line-height": 1.4,
        padding: "32px 24px 16px",
    }

    contentStyle = {
        flex: 1,
        "overflow-y": "auto",
        "-webkit-overflow-scrolling": "touch",
        padding: "0 24px",
        "margin-bottom": "32px",
        "font-size": "17px",
        "line-height": 1.4,
        "word-wrap": "break-word",
        "-webkit-hyphens": "auto",
        hyphens: "auto",
        color: "rgba(0, 0, 0, 0.5)",
    }

    footerWrapStyle = {
        position: "relative",
        "line-height": "56px",
        "min-height": "56px",
        "font-size": "17px",
        display: "flex",
    }

    btnStyle = {
        display: "block",
        flex: 1,
        color: "#576B95",
        "font-weight": 700,
        "text-decoration": "none",
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        position: "relative",
    }

    preStyle = `
    .weui-dialog__ft:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
    .weui-dialog__btn:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        width: 1px;
        bottom: 0;
        border-left: 1px solid rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.1);
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleX(0.5);
        transform: scaleX(0.5);
    }
    `

    params = {
        title: "",
        content: "",
        showCancel: true,
        cancelText: "取消",
        cancelColor: "#000000",
        confirmText: "确定",
        confirmColor: "#576B95",
        // eslint-disable-next-line
        success: (params: {})=>{},
        // eslint-disable-next-line
        fail: ()=>{},
        // eslint-disable-next-line
        complete: (params: {})=>{}
    }

    dialogTag: HTMLDivElement
    titleTag: HTMLDivElement
    contentTag: HTMLDivElement
    footerTag: HTMLDivElement
    confirmTag: HTMLDivElement
    cancelTag: HTMLDivElement
    wrapper: HTMLDivElement
    mask: HTMLDivElement
    preStyleTag: HTMLStyleElement
    resolveHandler: (value?: unknown) => void

    render(params = {}) {
        const options = Object.assign(
            {}, this.params, params
        )

        this.mask = document.createElement("div")
        this.mask.setAttribute("style", processCss(this.maskStyle))

        this.dialogTag = document.createElement("div")
        this.dialogTag.setAttribute("style", processCss(this.dialogStyle))

        this.titleTag = document.createElement("div")
        this.titleTag.setAttribute("style", processCss(this.titleStyle))
        this.titleTag.textContent = options.title

        this.contentTag = document.createElement("div")
        this.contentTag.setAttribute("style", processCss(this.contentStyle))
        this.contentTag.textContent = options.content

        this.footerTag = document.createElement("div")
        this.footerTag.setAttribute("style", processCss(this.footerWrapStyle))
        this.footerTag.classList.add("weui-dialog__ft")

        this.cancelTag = document.createElement("div")
        this.cancelTag.setAttribute("style", processCss({
            ...this.btnStyle,
            color: options.cancelColor
        }))
        this.cancelTag.textContent = options.cancelText
        this.cancelTag.classList.add("weui-dialog__btn")
        this.cancelTag.onclick = () => {
            options.success({
                confirm: false,
                cancel: true
            })
            options.complete({
                confirm: false,
                cancel: true
            })
            this.resolveHandler({
                confirm: false,
                cancel: true
            })
            this.hide()
        }

        // 确认 Tag 在右边
        this.confirmTag = document.createElement("div")
        this.confirmTag.setAttribute("style", processCss({
            ...this.btnStyle,
            color: options.confirmColor
        }))
        this.confirmTag.textContent = options.confirmText
        this.confirmTag.classList.add("weui-dialog__btn")
        this.confirmTag.onclick = () => {
            options.success({
                confirm: true,
                cancel: false
            })
            options.complete({
                confirm: true,
                cancel: false
            })
            this.resolveHandler({
                confirm: true,
                cancel: false
            })
            this.hide()
        }

        this.wrapper = document.createElement("div")
        this.wrapper.style.display = "none"

        this.dialogTag.appendChild(this.titleTag)
        this.dialogTag.appendChild(this.contentTag)
        this.footerTag.appendChild(this.cancelTag)
        this.footerTag.appendChild(this.confirmTag)
        this.dialogTag.appendChild(this.footerTag)

        this.wrapper.appendChild(this.mask)
        this.wrapper.appendChild(this.dialogTag)

        document.body.appendChild(this.wrapper)
    }
    /**
     * 添加 modal 的 after 样式
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

        this.wrapper.style.display = "block"

        return new Promise((resolve) => {
            this.resolveHandler = resolve
        })
    }
    hide() {
        this.wrapper.style.display = "none"
    }
}
