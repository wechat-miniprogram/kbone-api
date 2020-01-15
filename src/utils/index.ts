import {envVar} from "../enums/index"

// eslint-disable-next-line
declare let Page: any
// eslint-disable-next-line
declare let Component: any

export const ismp = typeof Page === "function" && typeof Component === "function"

export function getEnv() {
    if (ismp) {
        return envVar.wx
    } else {
        return envVar.web
    }
}

export function processCss(styles: {[key: string]: string | number}) {
    let css = ""
    // eslint-disable-next-line
    for(const prop in styles) {
        css += `${prop}: ${styles[prop]};`
        if (styles[prop] === "flex") {
            css += "display: -ms-flexbox;"
        }
    }

    return css
}
