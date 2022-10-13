// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueRouter from "vue-router" 
Vue.use(VueRouter)

import "element-ui/lib/theme-chalk/index.css"
import {Button, Form, FormItem, Input, Message, Container, Header, Aside, Main} from "element-ui"

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

Vue.config.productionTip = false
Vue.prototype.$message = Message

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
