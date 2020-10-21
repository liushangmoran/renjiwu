import Vue from 'vue'
import Router from 'vue-router'

import ResourceService from '@/components/resource-usage/resource-service'
import ApplicationService from '@/components/resource-usage/application-service'
import BestPractice from '@/components/resource-usage/best-practice'
import SideBar from '@/components/resource-provider/sidebar'
import dataView from '@/components/resource-league/data-view'
import PhysicalDevice from '@/components/resource-provider/physical-device'
import Index from '@/components/index'
import Usage from '@/components/resource-usage/usage'
import Login from '@/components/resource-league/login'
import Resource from '@/components/resource-usage/resource'
import League from '@/components/resource-league/league'
import Physical from '@/components/resource-provider/physical'
import Allview from '@/components/allview'
import SideBar1 from '@/components/resource-usage/sidebar'
import SideBar2 from '@/components/resource-league/sidebar'
// import { component } from 'vue/types/umd'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   
    {
      path: '/first',
      redirect:'first',
      component:Allview,
      name:'',
      children:[
        {
          path:'/',
          components:{
            default:SideBar,
            content:PhysicalDevice
          },
          matchAs:2
        }
      ]
    },
    {
      path: '/second',
      redirect:'second',
      component:Allview,
      name:'',
      children:[
        {
          path:'/',
          components:{
            default:SideBar1,
            content:ResourceService
          },
          matchAs:2
        }
      ]
    },
    {
      path: '/third',
      redirect:'third',
      component:Allview,
      name:'',
      children:[
        {
          path:'/',
          components:{
            default:SideBar2,
            content:dataView
          },
          matchAs:2
        }
      ]
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
      component:Allview,
      name:'',
      children:[
        {
          path:'/',
          components:{
            default:SideBar1,
            content:ApplicationService,
          },
          matchAs:2
        }
      ]
    },
    {
      path: '/best-practice',
      redirect:'best-practice',
      component:Allview,
      name:'',
      children:[
        {
          path:'/',
          components:{
            default:SideBar1,
            content:BestPractice,
          },
          matchAs:2
        }
      ]
    },
    {
      path: '/league',
      redirect:'league',
      component:Login,
      name:'',
      children:[
        {
          path:'/',
          component:League,
          matchAs:1
        }
      ]
    },
    {
      path: '/physical',
      redirect:'physical',
      component:Index,
      name:'',
      children:[
        {
          path:'/',
          component:Physical,
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
