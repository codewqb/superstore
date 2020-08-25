<template>
  <div class="home-recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt @load="imgLoad" />
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
  },
  methods: {
    imgLoad() {
      this.$emit('recImgLoad');
    }
  },
}
</script>

<style lang="less" scoped>
.home-recommend {
  display: flex;
  width: 100%;
  padding: 15px 0 20px;
  text-align: center;
  font-size: 12px;
  border-bottom: 10px solid #eee;
  .recommend-item {
    flex: 1;
    img {
      width: 65px;
      margin: 0 0 10px 0;
    }
  }
}
</style>