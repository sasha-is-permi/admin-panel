import Vue from 'vue'
import Router from 'vue-router'

import workspaces from '@/components/workspaces'



Vue.use(Router)

export default new Router ({
   routes: [
      { path:'/workspaces',
      name:'workspaces',
      component:workspaces}
   ]
})


