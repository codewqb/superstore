<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="{color:hLight}">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    path: String,
    color: String
  },
  computed: {
    hLight() {
      var flog = this.$route.path.indexOf(this.path)
      if (flog !== -1) {
        return this.color
      }
    }
  },
  methods: {
    itemClick() {
      this.$router.push(this.path)
    }
  },
}
</script>
<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
}
</style>