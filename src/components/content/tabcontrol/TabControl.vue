<template>
  <div class="tab-control">
    <div
      class="control-item"
      :class="{active:currentIndex == index}"
      v-for="(item,index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index);
    }
  },
}
</script>
<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  text-align: center;

  .control-item {
    flex: 1;
    span{
      padding: 5px;
    }
  }
  .active {
    color: var(--color-high-text);
    span {
      border-bottom: 2px solid var(--color-high-text);
    }
  }
}
</style>