import Vue from 'vue'
import VueRouter from 'vue-router'

//懒加载路由组件
const Home = () => import('../views/home/Home')
const Find = () => import('../views/find/Find')
const School = () => import('../views/school/School')
const Message = () => import('../views/message/Message')
const Profile = () => import('../views/profile/Profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/find',
    component: Find
  },
  {
    path: '/school',
    component: School
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
