<template>
  <nav-bar>
    <div slot="left" class="detail-back" @click="back">
      <img src="~assets/imgs/common/back.svg" alt />
    </div>
    <div slot="center" class="detail-titles">
      <div
        class="title-item"
        v-for="(item, index) in titles"
        :key="index"
        @click="titleClick(index)"
        :class="{ active: currentIndex === index }"
      >{{ item }}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  name: 'DetailNav',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    back() {
      this.$router.back()
    }
  },
}
</script>

<style lang="less" scoped>
.detail-titles {
  display: flex;
  font-size: 14px;
  .title-item {
    flex: 1;
  }
}
.detail-back {
  height: 100%;
  img {
    margin-top: 12px;
  }
}
.active {
  color: var(--color-high-text);
}
</style>