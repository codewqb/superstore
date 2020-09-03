<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
Swiper.use([Pagination, Autoplay])
export default {
  name: 'Swiper',
  props: {
    myClassName: {
      type: String,
      default() {
        return ''
      }
    },
    slideCount: Number
  },
  mounted() {
    if (this.slideCount < 2) {
      var isLoop = false
      var pagination = null
    } else {
      isLoop = true
      pagination = '.swiper-pagination'
    }
    const sw = new Swiper('.' + this.myClassName, {
      loop: isLoop,
      autoplay: {
        disableOnInteraction: false
      },
      pagination: {
        el: pagination
      }
    })
  }
}
</script>

<style lang="less" scoped>
</style>
