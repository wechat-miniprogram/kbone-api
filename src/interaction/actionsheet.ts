import {processCss} from "../utils/index"


/**
 * 用来对齐 wx.showActionSheet
 */
export default class ActionSheet {
    maskStyle = {
        left: 0,
        bottom: 0,
        position: "fixed",
        right: 0,
        "z-index": 1000,
        top: 0,
        background: "rgba(0, 0, 0, 0.6)",
        display: "none"
    }

    actionStyle = {
        position: "fixed",
        left: 0,
        bottom: 0,
        transform: "translate(0, 100%)",
        "-webkit-transform": "translate(0, 100%)",
        "-webkit-backface-visibility": "hidden",
        "backface-visibility": "hidden",
        "z-index": 5000,
        width: "100%",
        "background-color": "#EAE7E8",
        "-webkit-transition": "-webkit-transform 0.3s",
        transition: "transform 0.3s, -webkit-transform 0.3s",
        "border-top-left-radius": "12px",
        "border-top-right-radius": "12px",
        overflow: "hidden",
    }

    menuStyle = {
        color: "rgba(0, 0, 0, 0.9)",
        "background-color": "#FFFFFF",
    }

    cancelStyle = {
        "margin-top": "8px",
        "background-color": "#FFFFFF",
        "padding-bottom": "env(safe-area-inset-bottom)",
    }

    preStyle = `
    .weui-actionsheet__cell {
        position: relative;
        padding: 16px;
        text-align: center;
        font-size: 17px;
        line-height: 1.41176471;
    }
    .weui-actionsheet__cell:before {
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
    `

    params:{
        [key in string]: any
    } = {
        itemList: [],
        itemColor: "#000000",
        // eslint-disable-next-line
        success: (params: {})=>{},
        // eslint-disable-next-line
        fail: ()=>{},
        // eslint-disable-next-line
        complete: (params: {})=>{}
    }

    actionTag: HTMLDivElement
    menuTag: HTMLDivElement
    cellTag: HTMLDivElement
    cancelTag: HTMLDivElement
    cancelTextTag: HTMLDivElement
    wrapper: HTMLDivElement
    mask: HTMLDivElement
    preStyleTag: HTMLStyleElement
    cells: Array<HTMLDivElement> = []
    resolveHandler: (value?: unknown) => void = () => {}
    rejectHandler: (value?: unknown) => void = () => {}

    render(params = {}) {
        const options = Object.assign(
            {}, this.params, params
        )

        this.mask = document.createElement("div")
        this.mask.setAttribute("style", processCss(this.maskStyle))

        this.actionTag = document.createElement("div")
        this.actionTag.setAttribute("style", processCss(this.actionStyle))

        this.menuTag = document.createElement("div")
        this.menuTag.setAttribute("style", processCss(this.menuStyle))

        this.cancelTag = document.createElement("div")
        this.cancelTag.setAttribute("style", processCss(this.cancelStyle))
        this.cancelTag.onclick = () => {
            this.hide()
            options.complete()
            options.fail({
                errMsg: "fail cancel"
            })
            this.rejectHandler({
                errMsg: "fail cancel"
            })
        }
        this.cancelTextTag = document.createElement("div")
        this.cancelTextTag.classList.add("weui-actionsheet__cell")
        this.cancelTextTag.textContent = "取消"

        this.wrapper = document.createElement("div")

        this.actionTag.appendChild(this.menuTag)
        this.cancelTag.appendChild(this.cancelTextTag)
        this.actionTag.appendChild(this.cancelTag)

        this.wrapper.appendChild(this.mask)
        this.wrapper.appendChild(this.actionTag)

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

        const itemList = options.itemList
        for (let index = 0; index < itemList.length; index++) {
            if (this.cells[index]) {
                const tag = this.cells[index]
                tag.textContent = itemList[index]
            } else {
                const cellTag = document.createElement("div")
                cellTag.classList.add("weui-actionsheet__cell")
                cellTag.textContent = itemList[index]
                cellTag.onclick = () => {
                    this.hide()
                    options.success({
                        tapIndex: index
                    })
                    options.complete({
                        tapIndex: index
                    })
                    this.resolveHandler({
                        tapIndex: index
                    })
                }
                this.cells.push(cellTag)
                this.menuTag.appendChild(cellTag)
            }
        }

        if (this.cells.length > itemList.length) {
            for (let index = this.cells.length - 1; index < itemList.length; index++) {
                this.menuTag.removeChild(this.cells[index])
            }

            this.cells.splice(itemList.length)
        }

        this.actionTag.style.transform = "translate(0, 0)"
        this.actionTag.style["-webkit-transform"] = "translate(0, 0)"
        this.mask.style.display = "block"

        return new Promise((resolve, reject) => {
            this.resolveHandler = resolve
            this.rejectHandler = reject
        })
    }
    hide() {
        this.actionTag.style.transform = "translate(0, 100%)"
        this.actionTag.style["-webkit-transform"] = "translate(0, 100%)"
        this.mask.style.display = "none"
    }
}
