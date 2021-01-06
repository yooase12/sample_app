import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '@/views/LoginPage'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/login",
      name: 'LoginPage',
     component: LoginPage }
  ],
})

export default router