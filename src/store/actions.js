import {
    REVEIVE_ADDRESS,
    REVEIVE_FOODTYPES,
    REVEIVE_SHOPS,
    REVEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    DECREMENT_FOOD_COUNT,
    INCREMENT_FOOD_COUNT
} from './type'

import { reqAddress, reqFoodTypes, reqShops, reqUserInfo, reqLogout, reqShopInfo, reqShopGoods, reqShopRatings } from '../api/'
export default {
    //异步获取地址
    async getAddress({ state, commit }) {
        //发送异步请求ajax请求
        const geohash = state.latitude + ',' + state.longitude
        const result = await reqAddress(geohash)
            //提交到mutations
        if (result.code === 0) {
            const address = result.data
            commit(REVEIVE_ADDRESS, { address })
        }
    },
    //异步获取食品分类
    async getFoodTypes({ commit }) {
        //发送异步请求ajax请求
        const result = await reqFoodTypes()
            //提交到mutations
        if (result.code === 0) {
            const foodtypes = result.data
            commit(REVEIVE_FOODTYPES, { foodtypes })
        }
    },
    //异步获取商家列表
    async getShops({ state, commit }) {
        //发送异步请求ajax请求
        const { longitude, latitude } = state
        const result = await reqShops(longitude, latitude)
        console.log(result.data)
            //提交到mutations
        if (result.code === 0) {
            const shops = result.data
            commit(REVEIVE_SHOPS, { shops })
        }
    },
    //请求到了user已经  同步记录用户信息
    recordUser({ commit }, userInfo) {
        commit(REVEIVE_USER_INFO, { userInfo })
    },
    //异步获取用户信息
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            const userInfo = result.data
            commit(REVEIVE_USER_INFO, { userInfo })
        }
    },
    //异步退出登录
    async logout({ commit }) {
        const result = await reqUserInfo()
        if (result.code === 0) {
            commit(RESET_USER_INFO)
        }
    },
    // 异步获取商家信息
    async getShopInfo({ commit }, cb) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            const info = result.data
            info.score = 3.5
            commit(RECEIVE_INFO, { info })
            cb && cb()
        }
    },
    // 异步获取商家评价
    async getShopRatings({ commit }, cb) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            const ratings = result.data
            commit(RECEIVE_RATINGS, { ratings })
            cb && cb()
        }
    },
    // 异步获取商家商品列表
    async getShopGoods({ commit }, cb) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            const goods = result.data
            commit(RECEIVE_GOODS, { goods })
                // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
            cb && cb()
        }
    },

    //同步更新食物中的count数量
    updateFoodCount({commit},{isAdd,food}){
        if(isAdd){
            commit(INCREMENT_FOOD_COUNT,{food})
        }else{
            commit(DECREMENT_FOOD_COUNT,{food})
        }
    }

}