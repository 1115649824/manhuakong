import Vue from 'vue'
import Router from 'vue-router'
import recommend from '../components/recommend.vue'
import list from '../components/list.vue'
import classification from '../components/classification.vue'
import novel from '../components/novel.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/novel',
      name: 'novel',
      component: novel
    }
  ]
})
