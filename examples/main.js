// eslint-disable-next-line
import Vue from "vue"
// eslint-disable-next-line
import KboneUI from "kbone-ui"
// eslint-disable-next-line
import "kbone-ui/lib/weui/weui.css"
// eslint-disable-next-line
import {sync} from "vuex-router-sync"
import router from "./route/index"
import store from "./store/index"
import App from "./App.vue"
import KboneAPI from "../src/index"

sync(store, router)
Vue.use(KboneUI)
Vue.use(KboneAPI)

// eslint-disable-next-line no-new
new Vue({
    el: "#app",
    router,
    store,
    render: h => h(App),
})
