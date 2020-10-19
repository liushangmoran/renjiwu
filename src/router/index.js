import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'
import ResourceService from '@/components/resource-usage/resource-service'
import ApplicationService from '@/components/resource-usage/application-service'
import BestPractice from '@/components/resource-usage/best-practice'
import SideBar from '@/components/resource-provider/sidebar'
import DataView from '@/components/resource-league/data-view'
import DhysicalDevice from '@/components/resource-provider/physical-device'
import Dhysical from '@/components/resource-provider/physical'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dhysical',
      component: Dhysical
    }
  ]
})
