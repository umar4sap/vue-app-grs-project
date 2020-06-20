import Vue from 'vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Home from '../views/Home.vue'



Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Dashboard.vue')
  },
  {
    path: '/task/:projectId',
    name: 'task',
    component: () => import(/* webpackChunkName: "about" */ '../views/Taskview.vue')
},
{
  path: '/employee/:employeeId',
  name: 'employee',
  component: () => import(/* webpackChunkName: "about" */ '../views/Employee.vue')
}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
