import Vue from "vue"
import Router from "vue-router"

import Login from "./components/Login"
import Home from "./views/Home"
import AlgoModel from "./components/AlgoModel"

Vue.use(Router)

export default new Router({
    routes: [
        {path: '/', redirect: "/login"},
        {path: '/login', component: Login},
        {
            path: '/home', 
            component: Home,
            children: [
                {
                    path: "algoModel/:modelName", 
                    component: AlgoModel,
                    props(route) {
                        return {
                            modelName: route.params.modelName
                        }
                    }
                }
            ]
        }
    ]
})