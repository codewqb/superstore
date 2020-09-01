<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <category-menu :category-menu="category"></category-menu>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
import CategoryMenu from './childComps/CategoryMenu';
import { getCategory } from 'network/category'
export default {
  name: 'Category',
  components: {
    NavBar,
    CategoryMenu
  },
  data() {
    return {
      category: []
    }
  },
  created() {
    this.getCategory();
  },
  methods: {
    /**
     * 网络请求相关的方法
     */
    // 获取分类数据
    getCategory() {
      getCategory().then(res => {
        // 获取分类数据
        this.category = res.data.category.list;
      })
    }
  },
}
</script>
<style lang="less" scoped>
#category {
  position: relative;
  width: 100%;
  height: 100vh;
}
.category-nav {
  color: #fff;
  font-weight: 700;
  background-color: var(--color-tint);
}
</style>