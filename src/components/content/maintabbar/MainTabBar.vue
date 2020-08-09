<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" color="deeppink">
        <i class="fas fa-home"></i>
        <span>首页</span>
      </tab-bar-item>
      <tab-bar-item path="/category" color="deeppink">
        <i class="fas fa-th-large"></i>
        <span>分类</span>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" color="deeppink">
        <i class="fas fa-shopping-cart"></i>
        <span>购物车</span>
      </tab-bar-item>
      <tab-bar-item path="/profile" color="deeppink">
        <i class="fas fa-user"></i>
        <span>我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import tabBar from 'components/common/tabbar/TabBar'
import tabBarItem from 'components/common/tabbar/TabBarItem'
export default {
  components: {
    tabBar,
    tabBarItem
  }
}
</script>
<style lang="less" scoped>
i {
  display: block;
  margin: 4px 0px 0px 0px;
  font-size: 14px;
  line-height: 21px;
}
span {
  display: block;
  font-size: 13px;
  line-height: 20px;
}
</style>