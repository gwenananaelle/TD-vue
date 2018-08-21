import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Movielist from '@/components/movieList'
import FirstRoute from '@/components/FirstRoute'

Vue.use(Router)

Vue.config.productionTip = false

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'movieList',
      component: Movielist
    },
    {
      path: '/firstRoute',
      name: 'firstRoute',
      component: FirstRoute
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
