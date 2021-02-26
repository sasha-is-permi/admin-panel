// импорт объекта vue, router для отображения страничек
// (роутов) и AuthGuard для защиты страничек от 
// несанкционированного доступа 
import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'

//домашняя страничка (после авторизации показывается)
import home       from '@/components/home'
// для авторизации -login (в самом начале показывается)
// для выхода из авторизации - logout
import login      from  '@/components/login'
import logout     from  '@/components/logout'

// импорт страничек-роутов (components/*.vue)
// странички (пункты) административного меню
// employee       сотрудники
// project        проекты
// projectgroup   группы проектов
// team           команды
// process        процессы
// metric         метрики
// workspace      рабочие области
// integration    интеграции


import employee from '@/components/employee'
import project   from '@/components/project'
import projectgroup from '@/components/projectgroup'
import team      from '@/components/team'
import process  from '@/components/process'
import metric    from '@/components/metric'
import workspace from '@/components/workspace'
import integration from '@/components/integration'


Vue.use(Router)

export default new Router ({
// Подключение страничек к роутингу и прописывание свойств для страничек
// beforeEnter:AuthGuard - до входа на страничку 
// проверяем- есть ли авторизация
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
      { path:'/employee',
      name:'employee',
      component:employee,
      beforeEnter:AuthGuard},                 
      { path:'/project',
      name:'project',
      component:project,
      beforeEnter:AuthGuard},  
      { path:'/projectgroup',
      name:'projectgroup',
      component:projectgroup,
      beforeEnter:AuthGuard},  
      { path:'/team',
      name:'team',
      component:team,
      beforeEnter:AuthGuard},
      { path:'/process',
      name:'process',
      component:process,
      beforeEnter:AuthGuard},  
      { path:'/metric',
      name:'metric',
      component:metric,
      beforeEnter:AuthGuard},
      { path:'/workspace',
      name:'workspace',
      component:workspace,
      beforeEnter:AuthGuard},       
      { path:'/integration',
      name:'integration',
      component:integration,
      beforeEnter:AuthGuard},
      { path:'/setting',
      name:'setting',
      component:setting,
      beforeEnter:AuthGuard},
   ]
})




