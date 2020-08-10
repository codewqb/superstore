<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper></swiper>
  </div>
</template>
<script>
import navBar from 'components/common/navbar/NavBar';
import swiper from 'components/content/swiper/Swiper';
import { getHomeMultidata } from 'network/home';
export default {
  components:{
    navBar,
    swiper
  }
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