import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reception from '@/views/Reception.vue'
import SampleList from '@/views/SampleList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'reception' },
      component: Reception
    },
    {
      path: '/reception',
      name: 'reception',
      component: Reception
    },
    {
      path: '/samples',
      name: 'sample',
      component: SampleList
    }
  ]
})
