<template>
  <scroll class="menu-scroll" ref="scroll" :key="categoryMenu.length">
    <ul class="cate-menu">
      <li
        :class="{active:currentIndex === index}"
        v-for="(item,index) in categoryMenu"
        :key="index"
        @click="menuClick(index)"
      >{{item.title}}</li>
    </ul>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';
export default {
  name: 'CategoryMenu',
  components: {
    Scroll
  },
  props: {
    categoryMenu: {
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
    menuClick(index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style lang="less" scoped>
.cate-menu {
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  li {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
    color: #666;
  }
}
.menu-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 100px;
  overflow: hidden;
  background-color: #f6f6f6;
}
.cate-menu .active {
  color: var(--color-high-text);
  font-weight: 700;
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>