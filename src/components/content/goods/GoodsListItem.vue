<template>
  <div
    @click="toDetail"
    class="goods-item"
  >
    <img
      :alt="goodsItem.title"
      @load="imgLoad"
      v-lazy="showImg"
    />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="goods-price">￥{{ goodsItem.price }}</span>
      <span class="goods-collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    showImg() {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad() {
      if (this.$route.path.indexOf('/home') !== -1) {
        this.$bus.$emit('homeImgLoad')
      } else if (this.$route.path.indexOf('/detail') !== -1) {
        this.$bus.$emit('detailImgLoad')
      }
    },
    toDetail() {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  }
}
</script>

<style lang="less" scoped>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 45%;
  img {
    width: 100%;
    border-radius: 8px;
  }
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  p {
    margin-bottom: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .goods-collect {
    position: relative;
  }
}
.goods-collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url('~assets/imgs/common/collect.svg') center/14px;
}
</style>