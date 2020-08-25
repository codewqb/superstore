<template>
  <div>
    <detail-nav />
    <detail-swiper myClassName="detail-swiper" class="detail-swiper" :topImgs="topImgs" />
  </div>
</template>

<script>
// 子组件
import DetailNav from './childComps/DetailNav';
import DetailSwiper from './childComps/DetailSwiper';

import { getDetail } from 'network/detail';
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper
  },
  data() {
    return {
      iid: null,
      // 轮播图
      topImgs: []
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
  },
  methods: {
    /**
     * 网络请求相关方法
     */
    getDetail() {
      getDetail(this.iid).then(res => {
        // 获取轮播图数据
        this.topImgs = res.result.itemInfo.topImages;
      })
    }
  },
}
</script>

<style lang="less" scoped>
.detail-swiper{
  width: 100%;
  height: 300px;
}
</style>