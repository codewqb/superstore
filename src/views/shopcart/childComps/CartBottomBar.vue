<template>
  <div class="bottom-bar">
    <div class="bar-button">
      <check-button class="button" :is-checked="isAllChecked" @click.native="allCheckClick" />
      <span>全选</span>
    </div>
    <div class="price">总计：{{totalPrice}}</div>
    <div class="calculate">去计算({{calculate}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton';
import { ALL_CHECK } from '@/store/mutation-types';
export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => item.checked)
        .reduce((pre, next) => {
          return pre + next.price * next.count;
        }, 0)
        .toFixed(2);
    },
    calculate() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isAllChecked() {
      if (this.$store.state.cartList.length === 0) {
        return false;
      }
      return this.$store.state.cartList.every(item => item.checked);
    }
  },
  methods: {
    allCheckClick() {
      this.$store.commit(ALL_CHECK, this.isAllChecked);
    }
  },
}
</script>

<style lang="less" scoped>
.bottom-bar {
  position: absolute;
  bottom: 49px;
  left: 0;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #eee;
  .bar-button {
    display: flex;
    align-items: center;
    margin-left: 5px;
    width: 80px;
    .button {
      width: 25px;
      height: 25px;
      line-height: 40px;
    }
    span {
      margin-left: 5px;
    }
  }
  .price {
    flex: 1;
  }
  .calculate {
    width: 30%;

    color: #fff;
    background-color: red;
  }
}
</style>