<template>
  <div id="app">
      <router-view></router-view>
      <FooterGuide
      v-if="$route.meta.showFooterGuide"
      ></FooterGuide>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  
   mounted() {
     //this.$store.dispatch('getAddress')
     this.getAddress()
     this.getUserInfo()
   },
  methods: {
    ...mapActions(['getAddress','getUserInfo'])
  },
  components: { 
    FooterGuide
  }
 
}
</script>
<style lang="stylus" scoped>
  #app 
    width 100%
    height 100%
    background #f5f5f5
</style>


