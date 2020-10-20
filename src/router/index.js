import Vue from 'vue'
import Router from 'vue-router'

import ResourceService from '@/components/resource-usage/resource-service'
import ApplicationService from '@/components/resource-usage/application-service'
import BestPractice from '@/components/resource-usage/best-practice'
import SideBar from '@/components/resource-provider/sidebar'
import DataView1 from '@/components/resource-league/data-view'
import PhysicalDevice from '@/components/resource-provider/physical-device'
import Index from '@/components/index'
import Usage from '@/components/resource-usage/usage'
import Resource from '@/components/resource-usage/resource'
// import { component } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/usage',
      name: 'Usage',
      component: Usage
    },
    {
      path: '/resource',
      name: 'Resource',
      component: Resource
    },
    {
      path: '/resource-service',
      redirect:'ResourceService',
      component:Resource,
      name:'',
      children:[
        {
          path:'/',
          component:ResourceService,
          matchAs:1
        }
      ]
    },
    {
      path: '/application-service',
      redirect:'ApplicationService',
      component:Resource,
      name:'',
      children:[
        {
          path:'/',
          component:ApplicationService,
          matchAs:1
        }
      ]
    },
    {
      path: '/best-practice',
      redirect:'best-practice',
      component:Resource,
      name:'',
      children:[
        {
          path:'/',
          component:BestPractice,
          matchAs:1
        }
      ]
    },
    // {
    //   path: '/physical-device',
    //   redirect:'PhysicalDevice',
    //   component:Index,
    //   name:'首页',
    //   children:[
    //     {
    //       path:'/',
    //       component:PhysicalDevice,
    //       matchAs:1
    //     }
    //   ]
    // },
    
    // {
    //   path:'/resource-league',
    //   redirect:'resource-league',
    //   component:Index,
    //   name:'首页',
    //   children:[
    //     {
    //       path:'/',
    //       component:DataView1,
    //       matchAs:1
    //     }
    //   ]
    //  }
  ]
})
