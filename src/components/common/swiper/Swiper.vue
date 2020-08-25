<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.css';
Swiper.use([Pagination, Autoplay]);
export default {
  name: 'Swiper',
  props: {
    myClassName: {
      type: String,
      default() {
        return '';
      }
    }
  },
  mounted() {
    new Swiper('.' + this.myClassName, {
      loop: true,
      autoplay: {
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
}
</script>

<style lang="less" scoped>


</style>
