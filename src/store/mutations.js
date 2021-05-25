import Vue from 'vue'
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
export default {
    [REVEIVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [REVEIVE_FOODTYPES](state, { foodtypes }) {
        state.foodtypes = foodtypes
    },
    [REVEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [REVEIVE_USER_INFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    [RESET_USER_INFO](state) {
        state.userInfo = {}
    },
    [RECEIVE_INFO](state, { info }) {
        state.info = info
    },
    [RECEIVE_RATINGS](state, { ratings }) {
        state.ratings = ratings
    },
    [RECEIVE_GOODS](state, { goods }) {
        state.goods = goods
    },
    [INCREMENT_FOOD_COUNT](state, { food }) {
        if(!food.count){//第一次没有数量的
            // food.count=1//新增属性(没有数据绑定)
             Vue.set(food,'count',1)/* 对象，属性名，属性值 */ //让新增属性也有数据绑定
            state.cartFoods.push(food)
        }else{
            food.count++
        }
            
    },
    [DECREMENT_FOOD_COUNT](state, { food }) {
        if(food.count){
            food.count--
            if(food.count===0){
                //将food从cartFoods中移除
                state.cartFoods.splice(state.cartFoods.indexOf(food),1)
            }
        }
    }

}