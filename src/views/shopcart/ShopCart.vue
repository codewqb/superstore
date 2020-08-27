<template>
  <div id="shop-cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list />
    <!-- 底部汇总 -->
    <cart-bottom-bar />
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import CartList from './childComps/CartList';
import CartBottomBar from './childComps/CartBottomBar';
import { mapGetters } from 'vuex';
export default {
  name: 'ShopCart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['cartCount'])
  },
}
</script>
<style lang="less" scoped>
#shop-cart {
  width: 100%;
  height: 100vh;
  position: relative;
  .cart-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
}
</style>