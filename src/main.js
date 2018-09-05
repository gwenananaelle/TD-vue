import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Movielist from '@/components/movieList.vue'
import Admin from '@/components/Admin.vue'
import VueSocket from 'vue-socket.io'

Vue.use(VueSocket, 'http://localhost:5010')
Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes:
  [
    {path: '/', name: 'movieList', component: Movielist},
    {path: '/Admin', name: 'admin', component: Admin},
    {path: '/Admin/:_id', name: 'adminId', component: Admin}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
