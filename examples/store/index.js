// eslint-disable-next-line
import Vue from "vue"
// eslint-disable-next-line
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        input: "",
    },
    actions,
    mutations,
})
