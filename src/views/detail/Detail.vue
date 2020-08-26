<template>
  <div id="detail">
    <!-- 头部导航 -->
    <detail-nav class="detail-nav" @titleClick="titleClick" ref="detailNav" />
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="titleScroll">
      <!-- 轮播图 -->
      <detail-swiper my-class-name="detail-swiper" class="detail-swiper" :top-imgs="topImgs" />
      <!-- 商品基本信息 -->
      <detail-base-info :goods="goods" />
      <!-- 店铺信息 -->
      <detail-shop-info :shop="shop" />
      <!-- 商品详情 -->
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <!-- 商品参数信息 -->
      <detail-params-info ref="params" :params-info="goodsParams" />
      <!-- 评论信息 -->
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <!-- 推荐 -->
      <goods-list ref="recommend" :goods="recommendGoods" />
    </scroll>
  </div>
</template>

<script>
// 子组件
import DetailNav from './childComps/DetailNav';
import DetailSwiper from './childComps/DetailSwiper';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailGoodsInfo from './childComps/DetailGoodsInfo';
import DetailParamsInfo from './childComps/DetailParamsInfo';
import DetailCommentInfo from './childComps/DetailCommentInfo';
// 公共组件
import Scroll from 'components/common/scroll/Scroll';
import GoodsList from 'components/content/goods/GoodsList'
// AJAX
import { getDetail, Goods, Shop, GoodsParams, getRecommendGoods } from 'network/detail';
import { debounce } from 'common/tools';
export default {
  name: 'Detail',
  components: {
    DetailNav,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    Scroll,
    GoodsList
  },
  data() {
    return {
      iid: null,
      // 轮播图
      topImgs: [],
      // 商品信息
      goods: {},
      // 店铺信息
      shop: {},
      // 商品详情
      detailInfo: {},
      // 商品参数
      goodsParams: {},
      // 评论信息
      commentInfo: {},
      // 推荐商品数据
      recommendGoods: [],
      topPositionY: [],
      // 防止给nav里的currentIndex频繁赋值
      currentIndex: 0,
      listener: null
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail();
    this.listener = debounce(() => {
      this.$refs.scroll.refresh();
      this.topPositionY = [];
      this.topPositionY.push(0);
      this.topPositionY.push(this.$refs.params.$el.offsetTop);
      this.topPositionY.push(this.$refs.comment.$el.offsetTop);
      this.topPositionY.push(this.$refs.recommend.$el.offsetTop);
      this.topPositionY.push(Number.MAX_VALUE);
    });

  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on('detailImgLoad', () => {
      refresh();
    })
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // detailNav的联动效果
    imgLoad() {
      this.listener();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topPositionY[index]);
    },
    titleScroll(position) {
      let py = -position.y;
      const TPY = this.topPositionY;
      for (let i = 0; i < TPY.length - 1; i++) {
        if (this.currentIndex !== i && py >= TPY[i] && py < TPY[i + 1]) {
          this.currentIndex = i;
          this.$refs.detailNav.currentIndex = i;
        }
      }
    },
    /**
     * 网络请求相关方法
     */
    getDetail() {
      getDetail(this.iid).then(res => {
        const data = res.result;
        // 获取轮播图信息
        this.topImgs = data.itemInfo.topImages;
        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.shopInfo.services, data.columns);
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo);
        // 获取商品详情
        this.detailInfo = data.detailInfo;
        // 获取商品参数
        this.goodsParams = new GoodsParams(data.itemParams.info, data.itemParams.rule);
        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
      getRecommendGoods().then(res => {
        this.recommendGoods = res.data.list;
      });
    }
  },
}
</script>

<style lang="less" scoped>
#detail {
  z-index: 9;
  height: 100vh;
  position: relative;
  background-color: #fff;
}
.detail-nav {
  z-index: 9;
  position: relative;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
.detail-swiper {
  width: 100%;
  height: 300px;
}
</style>