<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from 'components/content/maintabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    mainTabBar
  }
}
</script>

<style lang="less">
@import "assets/css/base.css";
html,
body,
#app {
  width: 100%;
}
</style>
