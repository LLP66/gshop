/*路由器模块*/
import Vue from 'vue'
import VueRouter from 'vue-router'
/*
import Msite from "../pages/Msite/Msite";
import Search from "../pages/Search/Search";
import Order from "../pages/Order/Order";
import Profile from "../pages/Profile/Profile";
*/
const Msite = () => import("../pages/Msite/Msite")
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

import Login from "../pages/Login/Login";
import Userinfo from "../pages/Userinfo/Userinfo";
import Shop from "../pages/Shop/Shop";
import ShopInfo from "../pages/Shop/ShopInfo/ShopInfo";
import ShopGoods from "../pages/Shop/ShopGoods/ShopGoods";
import ShopRatings from "../pages/Shop/ShopRatings/ShopRatings";

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      redirect:'/msite'
    },
    {
      path: '/msite',
      component:Msite,  //返回路由组件的函数，只有执行此函数才会加载路由组件，这个函数在请求对应的路由路径时才会执行
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component:Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component:Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component:Profile,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/login',
      component:Login
    },
    {
      path: '/userinfo',
      component:Userinfo
    },
    {
      path: '/shop',
      component:Shop,
      children:[
        {
          path: '/shop/ratings',
          component:ShopRatings
        },
        {
          path: '/shop/goods',
          component:ShopGoods
        },
        {
          path: '/shop/info',
          component:ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        },
      ]
    },
  ]
})
