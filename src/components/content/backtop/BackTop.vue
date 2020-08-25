<template>
  <div class="back-top">
    <img src="~assets/imgs/common/top.png" />
  </div>
</template>

<script>
export default {
  name: 'BackTop'
}
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  right: 8px;
  bottom: 49px;
  border-radius: 50%;
}
.back-top img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>