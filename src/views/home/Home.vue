<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播banner -->
    <swiper :banners="banners"></swiper>
    <!-- 推荐 -->
    <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/NavBar';
import swiper from 'components/content/swiper/Swiper';
import homeRecommend from './childComps/HomeRecommend';
import { getHomeMultidata } from 'network/home';


export default {
  components: {
    navBar,
    swiper,
    homeRecommend
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>