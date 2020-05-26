import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import FrontPage from '@/components/frontPage/FrontPage'
import SizeComparison from '@/components/SizeComparison'

Vue.config.productionTip = false

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(Router)

export default new Router({
  routes: [
  {
      
      path: "/",
      redirect: {
      name: "FrontPage"
      }
  },
  {
      path: '/frontpage',
      name: 'FrontPage',
      component: FrontPage
  },

  {
      path: '/sizecomparison',
      name: 'SizeComparison',
      component: SizeComparison
  }
  

  ]
})