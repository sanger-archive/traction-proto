import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reception from '@/views/Reception.vue'
import SampleList from '@/views/SampleList.vue'
import LibraryList from '@/views/LibraryList.vue'
import SequencingRunList from '@/views/SequencingRunList.vue'
import BuildSequencingRun from '@/views/BuildSequencingRun.vue'

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
      name: 'sequencing-runs',
      component: SequencingRunList
    },
    {
      path: '/build-sequencing-run',
      name: 'build-sequencing-run',
      component: BuildSequencingRun
    }
  ]
})
