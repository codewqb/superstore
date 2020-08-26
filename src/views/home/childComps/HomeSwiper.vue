<template>
  <swiper :key="banners.length" :my-class-name="myClassName">
    <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad"/>
      </a>
    </div>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper';
export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    },
    myClassName: {
      type: String,
      default() {
        return ''
      }
    }
  },
  components: {
    Swiper
  },
  methods: {
    imgLoad() {
      this.$emit('swiperImgLoad');
    }
  },
}
</script>

<style lang="less" scoped>
.swiper-slide {
  width: 100%;
  a {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>
