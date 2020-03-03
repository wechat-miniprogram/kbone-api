// eslint-disable-next-line
import {AnyObj} from "../api/index.d"
import intercetorApi, {wrapFn} from "../wxapi/index"

function getSystemInfo(params: AnyObj) {
    if (params.success) {
        params.success({
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
        })
    }
}

function loadFontFace(params: AnyObj) {
    if (params.success) {
        params.success({
            status: "loaded"
        })
    }
}

function getSelectedTextRange(params: AnyObj) {
    if (params.success) {
        params.success({
            start: 0,
            end: 0
        })
    }
}

function downloadFile(params: AnyObj) {
    if (params.success) {
        params.success({
            statusCode: 400
        })
    }
}

function uploadFile(params: AnyObj) {
    if (params.success) {
        params.success({
            statusCode: 400
        })
    }
}

function connectSocket(params: AnyObj) {
    if (params.fail) {
        params.fail()
    }
}

function closeSocket(params: AnyObj) {
    if (params.fail) {
        params.fail()
    }
}


const asyncApis = [
    "setEnableDebug",
    "switchTab",
    "reLaunch",
    "redirectTo",
    "navigateTo",
    "navigateBack",
    // 导航栏设置
    "showNavigationBarLoading",
    "setNavigationBarTitle",
    "setNavigationBarColor",
    "hideNavigationBarLoading",
    "hideHomeButton",
    "setBackgroundTextStyle",
    "setBackgroundColor",
    "showTabBarRedDot",
    "showTabBar",
    "setTabBarStyle",
    "setTabBarItem",
    "setTabBarBadge",
    "removeTabBarBadge",
    "hideTabBarRedDot",
    "hideTabBar",
    // 下拉刷新
    "stopPullDownRefresh",
    "startPullDownRefresh",
    // 滚动
    "pageScrollTo",
    "setTopBarText",
    "nextTick",
    // 键盘
    "hideKeyboard",
    // wesocket
    "sendSocketMessage",

    // mDNS
    "stopLocalServiceDiscovery",
    "startLocalServiceDiscovery",

    // 数据缓存
    "setStorage",
    "removeStorage",
    "getStorageInfo",
    "getStorage",
    "clearStorage",

    // 周期性更新
    "setBackgroundFetchToken",
    "onBackgroundFetchData",
    "getBackgroundFetchToken",
    "getBackgroundFetchData",

    // 图片选择
    "saveImageToPhotosAlbum",
    "previewImage",
    "getImageInfo",
    "compressImage",
    "chooseMessageFile",
    "chooseImage",

    // 视频
    "saveVideoToPhotosAlbum",
    "chooseVideo",
    "chooseMedia",

    // 音频
    "stopVoice",
    "setInnerAudioOption",
    "playVoice",
    "pauseVoice",
    "getAvailableAudioSources",

    // 背景音频
    "stopBackgroundAudio",
    "seekBackgroundAudio",
    "playBackgroundAudio",
    "pauseBackgroundAudio",
    "getBackgroundAudioPlayerState",

    // 录音
    "startRecord",
    "stopRecord",

    // 位置
    "stopLocationUpdate",
    "startLocationUpdateBackground",
    "startLocationUpdate",
    "openLocation",
    "getLocation",
    "chooseLocation",

    // 转发
    "updateShareMenu",
    "showShareMenu",
    "hideShareMenu",
    "getShareInfo",

    // 画布
    "canvasToTempFilePath",
    "canvasPutImageData",
    "canvasGetImageData",

    // 文件
    "saveFile",
    "removeSavedFile",
    "openDocument",
    "getSavedFileList",
    "getSavedFileInfo",
    "getFileInfo",

    // 开放接口
    "login",
    "checkSession",

    "navigateToMiniProgram",
    "navigateBackMiniProgram",

    "getUserInfo",
    "reportMonitor",
    "reportAnalytics",
    "requestPayment",
    "authorize",
    "openSetting",
    "getSetting",
    "chooseAddress",
    "openCard",
    "addCard",
    "chooseInvoiceTitle",
    "chooseInvoice",
    "startSoterAuthentication",
    "checkIsSupportSoterAuthentication",
    "checkIsSoterEnrolledInDevice",
    "getWeRunData",
    "requestSubscribeMessage",
    "showRedPackage",

    // 设备
    "stopBluetoothDevicesDiscovery",
    "startBluetoothDevicesDiscovery",
    "openBluetoothAdapter",
    "getConnectedBluetoothDevices",
    "getBluetoothDevices",
    "getBluetoothAdapterState",
    "closeBluetoothAdapter",

    // iBeacon
    "stopBeaconDiscovery",
    "startBeaconDiscovery",
    "getBeacons",

    // wifi
    "stopWifi",
    "startWifi",
    "setWifiList",
    "getWifiList",
    "getConnectedWifi",
    "connectWifi",

    // 联系人
    "addPhoneContact",

    // 蓝牙
    "writeBLECharacteristicValue",
    "readBLECharacteristicValue",
    "notifyBLECharacteristicValueChange",
    "getBLEDeviceServices",
    "getBLEDeviceCharacteristics",
    "createBLEConnection",
    "closeBLEConnection",

    // battery
    "getBatteryInfo",

    // clipboard
    "setClipboardData",
    "getClipboardData",

    // NFC
    "stopHCE",
    "startHCE",
    "sendHCEMessage",
    "getHCEState",
    "getNetworkType",

    // 屏幕
    "setScreenBrightness",
    "setKeepScreenOn",
    "getScreenBrightness",

    // phone
    "makePhoneCall",

    // accelerometer
    "stopAccelerometer",
    "startAccelerometer",

    // compass
    "stopCompass",
    "startCompass",

    // deviceMotion
    "stopDeviceMotionListening",
    "startDeviceMotionListening",

    // gyroscope
    "stopGyroscope",
    "startGyroscope",

    // scanCode
    "scanCode",

    // vibrate
    "vibrateShort",
    "vibrateLong",
]

const apis: {[key in string]: (params: AnyObj) => void} = {}

asyncApis.forEach(key => {
    apis[key] = function(params: AnyObj) {
        if (params.success) {
            params.success({})
        }
    }
})

// 异步处理
const promiseApis: {[key in string]: (params: AnyObj) => void} = {}

intercetorApi(promiseApis, apis)

promiseApis.getSystemInfo = wrapFn(getSystemInfo)
promiseApis.loadFontFace = wrapFn(loadFontFace)
promiseApis.getSelectedTextRange = wrapFn(getSelectedTextRange)
promiseApis.downloadFile = wrapFn(downloadFile)
promiseApis.uploadFile = wrapFn(uploadFile)
promiseApis.connectSocket = wrapFn(connectSocket)
promiseApis.closeSocket = wrapFn(closeSocket)

export default promiseApis
