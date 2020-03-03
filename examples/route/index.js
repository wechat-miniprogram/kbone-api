// eslint-disable-next-line
import Vue from "vue"
// eslint-disable-next-line
import Router from "vue-router"
import routes from "./config"
import Home from "../view/home/index.vue"
import Interaction from "../view/components/interaction.vue"
import Login from "../view/components/login.vue"
import TitleBar from "../view/components/titleBar.vue"
import PullDown from "../view/components/pulldown.vue"
import Request from "../view/components/request.vue"

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
        },
        {
            path: routes.pages.login,
            name: "login",
            component: Login
        },
        {
            path: routes.pages.titleBar,
            name: "TitleBar",
            component: TitleBar
        },
        {
            path: routes.pages.pullDown,
            name: "PullDown",
            component: PullDown
        },
        {
            path: routes.pages.request,
            name: "Request",
            component: Request
        }
    ]
})
