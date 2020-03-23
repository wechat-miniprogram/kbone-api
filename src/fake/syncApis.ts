
export function canIUse() {
    return false
}

export function base64ToArrayBuffer(base64: string) {
    const binaryString = atob(base64)
    const len = binaryString.length
    const bytes = new Uint8Array(len)
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
}

export function arrayBufferToBase64(buffer: ArrayBuffer) {
    let binaryString = ""
    const bytes = new Uint8Array(buffer)
    const len = bytes.byteLength
    for (let i = 0; i < len; i++) {
        binaryString += String.fromCharCode(bytes[i])
    }
    return btoa(binaryString)
}


export function getSystemInfoSync() {
    return {
        SDKVersion: "2.0.4",
        batteryLevel: 100,
        benchmarkLevel: 1,
        brand: "devtools",
        fontSizeSetting: 16,
        language: "en",
        model: "iPhone 5",
        pixelRatio: 2,
        platform: "devtools",
        screenHeight: 568,
        screenWidth: 320,
        statusBarHeight: 20,
        system: "iOS 10.0.1",
        version: "7.0.4",
        windowHeight: 504,
        windowWidth: 320,
    }
}

class UpdateManager {
    applyUpdate() { }
    onCheckForUpdate() { }
    onUpdateFailed() { }
    onUpdateReady() { }
}

export function getUpdateManager() {
    return new UpdateManager()
}

/**
 * 声明周期
 */
export function getLaunchOptionsSync() {
    return {
        path: "pages/index/index",
        query: {},
        referrerInfo: {},
        scene: 1001,
        shareTicket: ""
    }
}

export function getEnterOptionsSync() {
    return {
        path: "pages/index/index",
        query: {},
        referrerInfo: {},
        scene: 1001,
        shareTicket: ""
    }
}


/**
 * 调试 Sync api
 */

class RealtimeLogManager {
    addFilterMsg() { }
    error() { }
    in() { }
    info() { }
    setFilterMsg() { }
    warn() { }
}

export function getRealtimeLogManager() {
    return new RealtimeLogManager()
}

class LogManager {
    debug() { }
    info() { }
    log() { }
    warn() { }
}

export function getLogManager() {
    return new LogManager()
}

// 动画
class Animation {
    backgroundColor() { return this }
    bottom() { return this }
    export() { return this }
    height() { return this }
    left() { return this }
    matrix() { return this }
    matrix3d() { return this }
    opacity() { return this }
    right() { return this }
    rotate() { return this }
    rotate3d() { return this }
    rotateX() { return this }
    rotateY() { return this }
    rotateZ() { return this }
    scale() { return this }
    scale3d() { return this }
    scaleX() { return this }
    scaleY() { return this }
    scaleZ() { return this }
    skew() { return this }
    skewX() { return this }
    skewY() { return this }
    step() { return this }
    top() { return this }
    translate() { return this }
    translate3d() { return this }
    translateX() { return this }
    translateY() { return this }
    translateZ() { return this }
    width() { return this }
}

export function createAnimation() {
    return new Animation()
}

export function getMenuButtonBoundingClientRect() {
    return {
        bottom: 58,
        height: 32,
        left: 223,
        right: 310,
        top: 26,
        width: 87,
    }
}

class UDPSocket {
    bind() {}
    close() {}
    offClose() {}
    offError() {}
    offListening() {}
    offMessage() {}
    onClose() {}
    onError() {}
    onListening() {}
    onMessage() {}
    send() {}
}

export function createUDPSocket() {
    return new UDPSocket()
}

// 地图
class MapContext {
    getCenterLocation() {}
    getRegion() {}
    getRotate() {}
    getScale() {}
    getSkew() {}
    includePoints() {}
    moveToLocation() {}
    setCenterOffset() {}
    translateMarker() {}
}

export function createMapContext() {
    return new MapContext()
}

class VideoContext {
    exitFullScreen() {}
    hideStatusBar() {}
    pause() {}
    play() {}
    playbackRate() {}
    requestFullScreen() {}
    seek() {}
    sendDanmu() {}
    showStatusBar() {}
    stop() {}
}

export function createVideoContext() {
    return new VideoContext()
}


class InnerAudioContext {
    destroy() {}
    offCanplay() {}
    offEnded() {}
    offError() {}
    offPause() {}
    offPlay() {}
    offSeeked() {}
    offSeeking() {}
    offStop() {}
    offTimeUpdate() {}
    offWaiting() {}
    onCanplay() {}
    onEnded() {}
    onError() {}
    onPause() {}
    onPlay() {}
    onSeeked() {}
    onSeeking() {}
    onStop() {}
    onTimeUpdate() {}
    onWaiting() {}
    pause() {}
    play() {}
    seek() {}
    stop() {}
}

export function createInnerAudioContext() {
    return new InnerAudioContext()
}

class AudioContext {
    pause() {}
    play() {}
    seek() {}
    setSrc() {}
}

export function createAudioContext() {
    return new AudioContext()
}

class BackgroundAudioManager {
    onCanplay() {}
    onEnded() {}
    onError() {}
    onNext() {}
    onPause() {}
    onPlay() {}
    onPrev() {}
    onSeeked() {}
    onSeeking() {}
    onStop() {}
    onTimeUpdate() {}
    onWaiting() {}
    pause() {}
    play() {}
    seek() {}
    stop() {}
}

export function getBackgroundAudioManager() {
    return new BackgroundAudioManager()
}

class LivePUsherContext {
    pause() {}
    pauseBGM() {}
    playBGM() {}
    resume() {}
    resumeBGM() {}
    setBGMVolume() {}
    setMICVolume() {}
    snapshot() {}
    start() {}
    startPreview() {}
    stop() {}
    stopBGM() {}
    stopPreview() {}
    switchCamera() {}
    toggleTorch() {}
}

export function createLivePusherContext() {
    return new LivePUsherContext()
}

class LivePlayerContext {
    exitFullScreen() {}
    mute() {}
    pause() {}
    play() {}
    requestFullScreen() {}
    resume() {}
    snapshot() {}
    stop() {}
}

export function createLivePlayerContext() {
    return new LivePlayerContext()
}

class RecorderManager {
    onError() {}
    onFrameRecorded() {}
    onInterruptionBegin() {}
    onInterruptionEnd() {}
    onPause() {}
    onResume() {}
    onStart() {}
    onStop() {}
    pause() {}
    resume() {}
    start() {}
    stop() {}
}

export function getRecorderManager() {
    return new RecorderManager()
}

class CameraContext {
    onCameraFrame() {
        return new CameraFrameListener()
    }
    setZoom() {}
    startRecord() {}
    stopRecord() {}
    takePhoto() {}
}

class CameraFrameListener {
    start() {}
    end() {}
}

export function createCameraContext() {
    return new CameraContext()
}

class MediaContainer {
    addTrack() {}
    destroy() {}
    export() {}
    extractDataSource() {}
    removeTrack() {}
}

export function createMediaContainer() {
    return new MediaContainer()
}

class CanvasContext {
    arc() {}
    arcTo() {}
    beginPath() {}
    bezierCurveTo() {}
    clearRect() {}
    clip() {}
    closePath() {}
    createCircularGradient() {}
    createLinearGradient() {}
    createPattern() {}
    draw() {}
    drawImage() {}
    fill() {}
    fillRect() {}
    fillText() {}
    lineTo() {}
    measureText() {}
    moveTo() {}
    quadraticCurveTo() {}
    rect() {}
    restore() {}
    rotate() {}
    save() {}
    scale() {}
    setFillStyle() {}
    setFontSize() {}
    setGlobalAlpha() {}
    setLineCap() {}
    setLineDash() {}
    setLineJoin() {}
    setLineWidth() {}
    setMiterLimit() {}
    setShadow() {}
    setStrokeStyle() {}
    setTextAlign() {}
    setTextBaseline() {}
    setTransform() {}
    stroke() {}
    strokeRect() {}
    strokeText() {}
    transform() {}
    translate() {}
}

export function createCanvasContext() {
    return new CanvasContext()
}

class OffscreenCanvas {
    getContext() {}
}

export function createOffscreenCanvas() {
    return new OffscreenCanvas()
}

class FileSystemManager {
    access() {}
    accessSync() {}
    appendFile() {}
    appendFileSync() {}
    copyFile() {}
    copyFileSync() {}
    getFileInfo() {}
    getSavedFileList() {}
    mkdir() {}
    mkdirSync() {}
    readdir() {}
    readdirSync() {}
    readFile() {}
    readFileSync() {}
    removeSavedFile() {}
    rename() {}
    renameSync() {}
    rmdir() {}
    rmdirSync() {}
    saveFile() {}
    saveFileSync() {}
    stat() {}
    statSync() {}
    unlink() {}
    unlinkSync() {}
    unzip() {}
    writeFile() {}
    writeFileSync() {}
}

export function getFileSystemManager() {
    return new FileSystemManager()
}

export function getAccountInfoSync() {
    return {
        miniProgram: {
            aappId: ""
        }
    }
}

class Worker {
    onMessage() {}
    postMessage() {}
    terminate() {}
}

export function createWorker() {
    return new Worker()
}

class SelectorQuery {
    exec() {}
    in() {}
    select() {}
    selectAll() {}
    selectViewport() {}
}

export function createSelectorQuery() {
    return new SelectorQuery()
}
