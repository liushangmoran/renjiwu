import Vue from 'vue'
import Router from 'vue-router'

import ResourceService from '@/components/resource-usage/resource-service'
import ApplicationService from '@/components/resource-usage/application-service'
import BestPractice from '@/components/resource-usage/best-practice'
import SideBar from '@/components/resource-provider/sidebar'
import dataView from '@/components/resource-league/data-view'
import PhysicalDevice from '@/components/resource-provider/physical-device'
import Allview from '@/components/allview'
import SideBar1 from '@/components/resource-usage/sidebar'
import SideBar2 from '@/components/resource-league/sidebar'
Vue.use(Router)

export default new Router({
  mode: 'hash',
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
    }
  ]
})
