<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-show="currentIndex == index"
        v-for="(item,index) in banners"
        :key="index"
      >
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </div>
    </div>
    <div class="swiper-indicator">
      <div
        class="indicator-item"
        :class="{'active':currentIndex==index}"
        v-for="(item,index) in banners"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    banners: {
      type: Array,
      defaultdefault() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null
    }
  },
  mounted() {
    this.play()
  },
  methods: {
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex == this.banners.length) {
        this.currentIndex = 0
      }
    },
    play() {
      this.intervalId = setInterval(this.autoPlay, 2000)
    }
  },
}
</script>

<style lang="less" scoped>
.swiper-container {
  position: relative;
  overflow: hidden;
  .swiper-wrapper {
    display: flex;
    .swiper-slide {
      width: 100%;
      flex-shrink: 0;
      a {
        display: block;
        img {
          vertical-align: top;
          width: 100%;
        }
      }
    }
  }
  .swiper-indicator {
    position: absolute;
    bottom: 8px;
    display: flex;
    width: 100%;
    justify-content: center;
    .indicator-item {
      float: left;
      width: 8px;
      height: 8px;
      background-color: #fff;
      border-radius: 50%;
      margin: 0 4px;
    }
    .active {
      background-color: red;
    }
  }
}
</style>
