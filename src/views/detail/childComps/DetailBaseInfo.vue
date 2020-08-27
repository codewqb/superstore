<template>
  <div v-if="Object.keys(goodsInfo).length !== 0" class="base-info">
    <h2 class="info-title">{{ goodsInfo.title }}</h2>
    <div class="info-price">
      <span class="new-price">{{ goodsInfo.newPrice }}</span>
      <del class="old-price">{{goodsInfo.oldPrice}}</del>
      <span v-if="goodsInfo.discount" class="discount">{{ goodsInfo.discount }}</span>
    </div>
    <div class="info-others">
      <span>{{ goodsInfo.columns[0] }}</span>
      <span>{{ goodsInfo.columns[1] }}</span>
      <span>{{ goodsInfo.services[goodsInfo.services.length-1].name }}</span>
    </div>
    <div class="info-services">
      <span class="info-services-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img :src="goodsInfo.services[index-1].icon" alt />
        <span>{{ goodsInfo.services[index-1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="less" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  h2 {
    font-size: 18px;
    color: #222;
  }
  .info-price {
    margin-top: 10px;
    .new-price {
      font-size: 22px;
      color: var(--color-high-text);
    }
    .old-price {
      margin-left: 5px;
      font-size: 13px;
    }
    .discount {
      position: relative;
      top: -8px;
      margin-left: 5px;
      padding: 3px 5px;
      font-size: 12px;
      color: #fff;
      background-color: var(--color-high-text);
      border-radius: 8px;
    }
  }
  .info-others {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-services {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }
}
.info-services-item {
  img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }
  span {
    margin-left: 2px;
    font-size: 13px;
    color: #333;
  }
}
</style>