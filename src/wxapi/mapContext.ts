function createMapContext(id: string) {
    // @ts-ignore
    return document.querySelector("#" + id).$$getContext()
}

function createVideoContext(id: string) {
    // @ts-ignore
    return document.querySelector("#" + id).$$getContext()
}

export {
    createMapContext,
    createVideoContext
}
