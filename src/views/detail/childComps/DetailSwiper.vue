<template>
  <swiper
    :key="topImgs.length"
    :my-class-name="myClassName"
    :slide-count="topImgs.length"
  >
    <div
      :key="index"
      class="swiper-slide"
      v-for="(item,index) in topImgs"
    >
      <img :src="item" />
    </div>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
export default {
  name: 'DetailSwiper',
  components: {
    Swiper
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return {}
      }
    },
    myClassName: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  width: 100%;
  img {
    width: 100%;
  }
}
</style>