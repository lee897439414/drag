import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/main.css'
import '../assets/css/main2.css'
import '../assets/css/iconfont.css'
Vue.use(Router)
import Oindex from '../views/index'
import Detail from '../views/detail'

export default new Router({
  routes: [
    {path:'/',component:Oindex},
    {path:'/detail',name:'Detail',component:Detail}
  ]
})
