<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
}
</script>
<style lang="less" scoped>
#tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  width: 100%;
  height: 49px;
  background-color: #f1f1f1;
  box-shadow: 0px -1px 1px rgba(0, 0, 0, 0.15);
}
</style>