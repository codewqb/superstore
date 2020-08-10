<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.home-recommend {
  display: flex;
  width: 100%;
  // margin: 4px 0 0 0;
  padding: 15px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
  .recommend-item {
    flex: 1;
    img {
      width: 70px;
      margin: 0 0 10px 0;
    }
  }
}
</style>