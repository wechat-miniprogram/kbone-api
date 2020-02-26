// eslint-disable-next-line
import {AnyObj} from "../api/index.d"

// noop functionis
const plainApisEnums = [
    /**
     * 应用级别事件
     */
    "onUnhandledRejection",
    "onPageNotFound",
    "onError",
    "onAudioInterruptionEnd",
    "onAudioInterruptionBegin",
    "onAppShow",
    "onAppHide",
    "offUnhandledRejection",
    "offPageNotFound",
    "offError",
    "offAudioInterruptionEnd",
    "offAudioInterruptionBegin",
    "offAppShow",
    "offAppHide",

    // 窗口监听
    "onWindowResize",
    "offWindowResize",
    "onKeyboardHeightChange",

    // websocket
    "onSocketOpen",
    "onSocketMessage",
    "onSocketError",
    "onSocketClose",
    "onLocalServiceResolveFail",
    "onLocalServiceLost",
    "onLocalServiceFound",
    "onLocalServiceDiscoveryStop",
    "offLocalServiceResolveFail",
    "offLocalServiceLost",
    "offLocalServiceFound",
    "offLocalServiceDiscoveryStop",

    // 数据缓存
    "setStorageSync",
    "removeStorageSync",
    "getStorageSync",
    "getStorageInfoSync",
    "clearStorageSync",

    // 背景音频
    "onBackgroundAudioStop",
    "onBackgroundAudioPlay",
    "onBackgroundAudioPause",

    // 位置
    "onLocationChange",
    "offLocationChange",

    // 性能上报
    "reportPerformance",

    "onBluetoothDeviceFound",
    "onBluetoothAdapterStateChange",
    "offBluetoothDeviceFound",
    "offBluetoothAdapterStateChange",

    // iBeacon
    "onBeaconUpdate",
    "onBeaconServiceChange",
    "offBeaconUpdate",
    "offBeaconServiceChange",

    // wifi
    "onWifiConnected",
    "onGetWifiList",
    "offWifiConnected",
    "offGetWifiList",

    // bluetooth
    "onBLEConnectionStateChange",
    "onBLECharacteristicValueChange",
    "offBLEConnectionStateChange",
    "offBLECharacteristicValueChange",

    // battery
    "getBatteryInfoSync",

    // on/off
    "onHCEMessage",
    "offHCEMessage",

    // networkStatus
    "onNetworkStatusChange",
    "offNetworkStatusChange",

    // 屏幕
    "onUserCaptureScreen",
    "offUserCaptureScreen",

    "onAccelerometerChange",
    "offAccelerometerChange",

    // compass
    "onCompassChange",
    "offCompassChange",

    // deviceMotion Event
    "onDeviceMotionChange",
    "offDeviceMotionChange",

    // gyroscope
    "onGyroscopeChange",
    "offGyroscopeChange",

    // memory
    "onMemoryWarning",
    "offMemoryWarning",
]

const plainApis: {[key in string]: (params: AnyObj)=>void} = {}

plainApisEnums.forEach(api => {
    plainApis[api] = function() {}
})


export default plainApis
