import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reception from '@/views/Reception.vue'
import SampleList from '@/views/SampleList.vue'
import LibraryList from '@/views/LibraryList.vue'
import SequencingRun from '@/views/SequencingRun.vue'

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
    },
    {
      path: '/libraries',
      name: 'libraries',
      component: LibraryList
    },
      {
      path: '/sequencing-run',
      name: 'sequencing-run',
      component: SequencingRun
    }
  ]
})
