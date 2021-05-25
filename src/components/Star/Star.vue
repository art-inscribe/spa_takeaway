<template>
  <div class="star" :class="'star-'+size">
      <!-- //只需知道5个类名的数组 -->
        <span class="star-item" 
        v-for="(starClass,index) in starClasses" :class="starClass" :key="index"
        ></span>
        
    </div>
</template>

<script>
//类名常量
const CLASS_ON='on'
const CLASS_OFF='off'
const CLASS_HALF='half'
 export default {
   props:{
       score:Number,
       size:Number
   },
   computed: {
       starClasses(){
           const {score}=this
           const scs=[]//类名的数组
           //向scs中添加n个 CLASS_ON --类名
           const scoreInteger=Math.floor(score)//评分的整数部分
           for( let i=0;i<scoreInteger;i++ ){
               scs.push(CLASS_ON)
           }
           //向scs中添加0/1个 CLASS_HALF--类名
           if( score*10-scoreInteger*10>=5 ){//小数计算不精确
                scs.push(CLASS_HALF)
           }
           //向scs中添加n个  CLASS_OFF --类名
           while( scs.length<5 ){//之前的小于5评分，执行此条语句
                scs.push(CLASS_OFF)
           }
          
           return scs
       }
   }
 }
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
    .star //2x图 3x图
        float left
        font-size 0
        .star-item
            display inline-block
            background-repeat no-repeat
        &.star-48
            .star-item
                width 20px
                height 20px
                margin-right 22px
                background-size 20px 20px
                &:last-child
                    margin-right: 0
                &.on
                    bg-image('./images/star48_on')
                &.half
                    bg-image('./images/star48_half')
                &.off
                    bg-image('./images/star48_off')
        &.star-36
            .star-item
                width 15px
                height 15px
                margin-right 6px
                background-size 15px 15px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star36_on')
                &.half
                    bg-image('./images/star36_half')
                &.off
                    bg-image('./images/star36_off')
        &.star-24
            .star-item
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                    margin-right 0
                &.on
                    bg-image('./images/star24_on')
                &.half
                    bg-image('./images/star24_half')
                &.off
                    bg-image('./images/star24_off')
 
</style>
