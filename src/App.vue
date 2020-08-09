<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  components:{
    mainTabBar
  }
}
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
