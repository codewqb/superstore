<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="@/assets/imgs/home/recommend_bg.jpg" alt @load="imgLoad" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'Feature',
  methods: {
    imgLoad() {
      this.$emit('imgLoad');
    }
  }
}
</script>
<style lang="less" scoped>
.feature {
  img {
    width: 100%;
  }
}
</style>