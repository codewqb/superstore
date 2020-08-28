<template>
  <scroll class="cart-list" ref="scroll">
    <div class="list-item" v-for="(item,index) in cartList" :key="index">
      <div class="item-selector">
        <check-button :is-checked="item.checked" @click.native="checkClick(item)" />
      </div>
      <div class="item-img">
        <img :src="item.img" alt="商品图片" />
      </div>
      <div class="item-info">
        <div class="item-title">{{item.title}}</div>
        <div class="item-desc">{{item.desc}}</div>
        <div class="item-total">
          <div class="item-price l">￥{{item.price}}</div>
          <div class="item-count r">x{{item.count}}</div>
        </div>
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
import CheckButton from 'components/content/checkbutton/CheckButton';
import { mapGetters } from 'vuex';
import { CHECK_GOODS } from '@/store/mutation-types';
export default {
  name: 'CartList',
  components: {
    Scroll,
    CheckButton
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    checkClick(item) {
      this.$store.commit(CHECK_GOODS, item);
    }
  },
}
</script>

<style lang="less" scoped>
.cart-list {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 89px;
  overflow: hidden;
}
.list-item {
  padding: 5px;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ccc;
  .item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      border-radius: 5px;
    }
  }
  .item-info {
    position: relative;
    padding: 5px 10px;
    font-size: 18px;
    color: #333;
    overflow: hidden;
    .item-desc {
      margin-top: 15px;
      font-size: 14px;
      color: #666;
    }
    .item-total {
      margin-top: 10px;
      position: absolute;
      left: 10px;
      bottom: 10px;
      right: 10px;
      .item-price {
        color: orangered;
      }
    }
  }
}
.item-title,
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>