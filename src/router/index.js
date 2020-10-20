import Vue from 'vue'
import Router from 'vue-router'

import ResourceService from '@/components/resource-usage/resource-service'
import ApplicationService from '@/components/resource-usage/application-service'
import BestPractice from '@/components/resource-usage/best-practice'
import SideBar from '@/components/resource-provider/sidebar'
import DataView from '@/components/resource-league/data-view'
import PhysicalDevice from '@/components/resource-provider/physical-device'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    // {
    //   path:'/resource-league',
    //   redirect:'DataView',
    //   component:index,
    //   name:'首页',
    //   children:[
    //     {
    //       path:'/',
    //       component:DataView,
    //       matchAs:1
    //     }
    //   ]
    // }
  ]
})
