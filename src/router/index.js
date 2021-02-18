import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

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
      component:logout,
      beforeEnter:AuthGuard},
      { path:'/workspaces',
      name:'workspaces',
      component:workspaces,
      beforeEnter:AuthGuard},
      { path:'/developers',
      name:'developers',
      component:developers,
      beforeEnter:AuthGuard},
      { path:'/teams',
      name:'teams',
      component:teams,
      beforeEnter:AuthGuard},  
      { path:'/projects',
      name:'projects',
      component:projects,
      beforeEnter:AuthGuard},  
      { path:'/projectgroups',
      name:'projectgroups',
      component:projectgroups,
      beforeEnter:AuthGuard},  
      { path:'/processes',
      name:'processes',
      component:processes,
      beforeEnter:AuthGuard},  
      { path:'/metrics',
      name:'metrics',
      component:metrics,
      beforeEnter:AuthGuard},  
      { path:'/settings',
      name:'settings',
      component:settings,
      beforeEnter:AuthGuard},  
      { path:'/integrations',
      name:'integrations',
      component:integrations,
      beforeEnter:AuthGuard}
   ]
})




