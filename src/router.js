import Vue from "vue"
import Router from "vue-router"

import Login from "./components/Login"
import Home from "./views/Home"
import AlgoModel from "./components/AlgoModel"
import ProductList from "./components/ProductList"


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: "/login" },
        { path: '/login', component: Login },
        { path: '/productlist', component: ProductList },
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