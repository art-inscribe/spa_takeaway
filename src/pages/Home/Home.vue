<template>
   <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">

           <router-link class="header_search" slot="left" to="/search">
            <i class="iconfont icon-sousuo"></i>
          </router-link>
          <router-link class="header_login" slot="right" :to="userInfo._id?'/userInfo':'/login'">
            <span class="header_login_text" v-if="!userInfo._id">
              登录|注册
            </span>
            <span class="header_login_text" v-else>
             <i class="iconfont icon-person"></i>
            </span>
          </router-link>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container" v-if="foodtypes.length">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(foodtypes,index) in foodtypesArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(foodtype,index) in foodtypes" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+foodtype.image_url">
                  </div>
                  <span>{{ foodtype.title }}</span>
                </a>
                
              </div>
            
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
          <!-- 显示数据没加载出来的有张图片 -->
          <img src="./images/msite_back.svg" alt="back" v-else>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </section>
</template>

<script>
import {mapState} from 'vuex'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'//也可以引入css样式
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
 export default {
   data () {
     return {
       baseImageUrl:'https://fuss10.elemecdn.com'
     }
   },
   mounted() {
     this.$store.dispatch('getFoodTypes')
     this.$store.dispatch('getShops')
   },
    computed:{
       ...mapState(['address','foodtypes','userInfo']),
        //根据foodtypes一维数组生成二维数组  一维数组种的个数为8个
       foodtypesArr(){
         const {foodtypes}=this 
         const arr=[]//空的二维数组

         let minArr=[]//空的一维数组
         //遍历foodtypes
         foodtypes.forEach(foodtype=>{
           if(minArr.length===8){
             minArr=[]
           }
            if(minArr.length===0){
              arr.push(minArr)
            }
            //将当前分类保存到一维数组中去
           minArr.push(foodtype)
         })
         return arr
       }
   },
   watch: {
     foodtypes(value){  //以获取到数据 ，在异步更新页面之前执行

     //setTimeout可以解决，实现效果，但是不好
        /* setTimeout(()=>{
            new Swiper('.swiper-container',{
                loop:true,
                  pagination: {
                    el: '.swiper-pagination',
                  },
              })
        },100) */
        //$nextTick()界面更新立即创建swiper对象
        this.$nextTick(()=>{//一旦界面更新，立即调用（写在数据更新之后）
           new Swiper('.swiper-container',{
              loop:true,
                pagination: {
                  el: '.swiper-pagination',
                },
            })
        })
     }
   },
   components: {
     HeaderTop,ShopList
   }
 }
</script>

<style lang="stylus" scoped>
          @import "../../common/stylus/mixins.styl"
        .msite  //首页
          width 100%
          .msite_nav
            bottom-border-1px(#e4e4e4)
            margin-top 45px
            height 200px
            background #fff
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  display flex
                  justify-content center
                  align-items flex-start
                  flex-wrap wrap
                  .link_to_food
                    width 25%
                    .food_container
                      display block
                      width 100%
                      text-align center
                      padding-bottom 10px
                      font-size 0
                      img
                        display inline-block
                        width 50px
                        height 50px
                    span
                      display block
                      width 100%
                      text-align center
                      font-size 13px
                      color #666
              .swiper-pagination
                >span.swiper-pagination-bullet-active
                  background #02a774
          .msite_shop_list
            top-border-1px(#e4e4e4)
            margin-top 10px
            background #fff
            .shop_header
              padding 10px 10px 0
              .shop_icon
                margin-left 5px
                color #999
              .shop_header_title
                color #999
                font-size 14px
                line-height 20px
            
</style>
 