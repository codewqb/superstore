<template>
  <div class="bottom-bar">
    <div class="bar-left bar-item">
      <div class="server">
        <i class="fas fa-server"></i>
        <span>客服</span>
      </div>
      <div class="store">
        <i class="fas fa-store"></i>
        <span>店铺</span>
      </div>
      <div class="collect" @click="collectClick">
        <i class="fas fa-star" :class="{'active':isCollect}"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="bar-right bar-item">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  data() {
    return {
      isCollect: false
    }
  },
  methods: {
    // 收藏
    collectClick() {
      this.isCollect = !this.isCollect;
    },
    // 添加购物车
    addToCart() {
      this.$emit('addToCart');
    }
  },
}
</script>

<style lang="less" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  display: flex;
  text-align: center;
  background-color: #fff;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
}
.bar-item {
  display: flex;
  flex: 1;
}
.bar-left {
  div {
    flex: 1;
    .fas {
      margin-top: 4px;
      display: block;
      font-size: 18px;
      line-height: 22px;
    }
    span {
      font-size: 14px;
    }
  }
}
.bar-right {
  div {
    flex: 1;
    line-height: 49px;
  }
}
.server .fas {
  color: #f03364;
}
.active {
  color: #ffb800;
}
.cart {
  background-color: #fede0c;
}
.buy {
  background-color: var(--color-tint);
}
</style>