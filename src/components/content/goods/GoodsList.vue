<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}
</style>