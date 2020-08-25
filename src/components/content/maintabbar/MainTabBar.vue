<template>
  <tab-bar>
    <tab-bar-item path="/home" color="var(--color-high-text)">
      <i class="fas fa-home"></i>
      <span>首页</span>
    </tab-bar-item>
    <tab-bar-item path="/category" color="var(--color-high-text)">
      <i class="fas fa-th-large"></i>
      <span>分类</span>
    </tab-bar-item>
    <tab-bar-item path="/shopcart" color="var(--color-high-text)">
      <i class="fas fa-shopping-cart"></i>
      <span>购物车</span>
    </tab-bar-item>
    <tab-bar-item path="/profile" color="var(--color-high-text)">
      <i class="fas fa-user"></i>
      <span>我的</span>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
import tabBar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style lang="less" scoped>
.tab-bar-item i {
  display: block;
  margin: 4px 0px 0px 0px;
  font-size: 20px;
  line-height: 24px;
}
.tab-bar-item span {
  display: block;
  font-size: 14px;
  line-height: 22px;
}
</style>