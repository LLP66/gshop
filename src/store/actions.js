/*
通过mutatuion间接更新state的多个方法对象
 */
import {
  RECEIVE_ADDRESS,
  RECEOVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShop
} from '../api'

export default {
  //获取异步地址
  async getAddress({commit,state}){
    //发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if(result.code === 0){
      commit(RECEIVE_ADDRESS,{address:result.data})
    }
  },
  //异步获取食品分类
  async getFoodCategorys({commit}){
    //发送异步ajax请求
    const result = await reqFoodCategorys()
    if(result.code === 0){
      commit(RECEOVE_CATEGORYS,{categorys:result.data})
    }
  },
  //异步获取商家
  async getShops({commit,state}){
    //发送异步ajax请求
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if(result.code === 0){
      commit(RECEIVE_SHOPS,{shops:result.data})
    }
  },
  //同步记录用户信息
  recordUser ({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo()
    if(result.code === 0){
      commit(RECEIVE_USER_INFO,{userInfo: result.data})
    }
  },
  // 异步登出
  async logout({commit}) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  // 异步获取商家信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code===0) {
      const info = result.data
      info.score = 3.5
      commit(RECEIVE_INFO, {info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit},callback) {
    const result = await reqShopRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
      //数据更新了，通知一下组件
      callback && callback()
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //数据更新了，通知一下组件
      callback && callback()
    }
  },
  //同步更新食物
  updateFoodCount({commit},{isAdd,food}) {
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else {
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  //同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  },
  // 异步获取商家商品列表
  async searchShops({commit, state}, keyword) {

    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash, keyword)
    if (result.code === 0) {
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS, {searchShops})
    }
  },
}
