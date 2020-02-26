import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import store from '../store'
import router from '../route/index'
import App from "../App.vue"
import KboneUI from "kbone-ui"
import KboneAPI from "../../src/index"
import "kbone-ui/lib/weui/weui.css"

Vue.use(KboneUI)
Vue.use(KboneAPI)

export default function createApp() {
    const container = document.createElement('div')
    container.id = 'app'
    document.body.appendChild(container)

    sync(store, router)

    return new Vue({
        el: '#app',
        router,
        store,
        render: h => h(App)
    })
}
