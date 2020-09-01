<template>
  <div id="home">
    <!-- 顶部导航 -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      v-show="isTabFixed"
      class="tab-control"
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
    />
    <scroll
      class="home-scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="controlSCroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播swiper -->
      <home-swiper
        :banners="banners"
        class="home-swiper"
        my-class-name="home-swiper"
        @swiperImgLoad.once="imgLoad"
      />
      <!-- 推荐 -->
      <home-recommend :recommends="recommends" @recImgLoad.once="imgLoad" />
      <!-- 本周流行 -->
      <feature @imgLoad="imgLoad" />
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" ref="tabControl2" />
      <!-- 商品列表 -->
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 返回顶部 -->
    <back-top @click.native="backTop" v-show="isBackTop" />
  </div>
</template>
<script>
// 子组件
import HomeSwiper from './childComps/HomeSwiper';
import HomeRecommend from './childComps/HomeRecommend';
import Feature from './childComps/Feature';
// 公共组件
import NavBar from 'components/common/navbar/NavBar';
import Scroll from 'components/common/scroll/Scroll';
import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from 'components/content/goods/GoodsList';
// AJAX
import { getHomeMultidata, getHomeGoods } from 'network/home';
// 公共方法
import { debounce } from 'common/tools';
import { backTopMixin } from 'common/mixins';

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeRecommend,
    Feature,
    NavBar,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  data() {
    return {
      // 轮播图数据
      banners: [],
      // 推荐数据
      recommends: [],
      // tabControl的标题
      titles: ['流行', '新款', '精选'],
      // 商品数据
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      // 当前商品类型
      currentType: 'pop',
      // tabControl的offsetTop
      tabOffsetTop: 0,
      // 控制tabControl的吸顶效果
      isTabFixed: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    // 请求多个数据
    this.getHomeMultidata();
    // 请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  mounted() {
    // 图片加载完成监听
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('homeImgLoad', () => {
      refresh();
    })
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 点击切换tabControl
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    // 控制返回顶部的显示与隐藏及tabControl的吸顶效果
    controlSCroll(position) {
      this.listenBackTop(position);
      // 控制tabControl的吸顶效果
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    // 图片加载获取tabControl的offsetTop
    imgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 请求数据相关的方法
     */
    // 请求多个数据： 轮播 跟 推荐
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    // 请求商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

      })
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.home-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.home-swiper {
  width: 100%;
}
.tab-control {
  z-index: 9;
  position: relative;
  background-color: #fff;
}
</style>