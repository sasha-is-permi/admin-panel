import Vue from 'vue'
import Router from 'vue-router'

import home       from '@/components/home'
import workspaces from '@/components/workspaces'
import developers from '@/components/developers'
import teams      from '@/components/teams'
import projects   from '@/components/projects'
import projectgroups from '@/components/projectgroups'
import processes  from '@/components/processes'
import metrics    from '@/components/metrics'
import settings   from '@/components/settings'
import integrations from '@/components/integrations'
import login      from  '@/components/login'
import logout     from  '@/components/logout'

Vue.use(Router)

export default new Router ({
   routes: [
      { path:'',
      name:'home',
      component:home},
      { path:'/login',
      name:'login',
      component:login},
      { path:'/logout',
      name:'logout',
      component:logout},
      { path:'/workspaces',
      name:'workspaces',
      component:workspaces},
      { path:'/developers',
      name:'developers',
      component:developers},
      { path:'/teams',
      name:'teams',
      component:teams},  
      { path:'/projects',
      name:'projects',
      component:projects},  
      { path:'/projectgroups',
      name:'projectgroups',
      component:projectgroups},  
      { path:'/processes',
      name:'processes',
      component:processes},  
      { path:'/metrics',
      name:'metrics',
      component:metrics},  
      { path:'/settings',
      name:'settings',
      component:settings},  
      { path:'/integrations',
      name:'integrations',
      component:integrations}
    
      

   ]
})




