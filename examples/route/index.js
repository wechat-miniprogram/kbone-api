// eslint-disable-next-line
import Vue from "vue"
// eslint-disable-next-line
import Router from "vue-router"
import routes from "./config"
import Home from "../view/home/index.vue"
import Interaction from "../view/components/interaction.vue"

Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
        {
            path: routes.index,
            name: "Index",
            component: Home
        },
        {
            path: routes.pages.interaction,
            name: "Interaction",
            component: Interaction
        }
    ]
})
