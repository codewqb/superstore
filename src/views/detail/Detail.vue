<template>
  <div id="detail">
    <!-- 头部导航 -->
    <detail-nav
      @titleClick="titleClick"
      class="detail-nav"
      ref="detailNav"
    />
    <scroll
      :probe-type="3"
      @scroll="detailScroll"
      class="content"
      ref="scroll"
    >
      <!-- 轮播图 -->
      <detail-swiper
        :top-imgs="topImgs"
        class="detail-swiper"
        my-class-name="detail-swiper"
      />
      <!-- 商品基本信息 -->
      <detail-base-info :goods-info="goodsInfo" />
      <!-- 店铺信息 -->
      <detail-shop-info :shop-info="shopInfo" />
      <!-- 商品详情 -->
      <detail-goods-info
        :detail-info="detailInfo"
        @imgLoad="imgLoad"
      />
      <!-- 商品参数信息 -->
      <detail-params-info
        :params-info="paramsInfo"
        ref="params"
      />
      <!-- 评论信息 -->
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      />
      <!-- 推荐 -->
      <goods-list
        :goods="recommendGoods"
        ref="recommend"
      />
    </scroll>
    <!-- 返回顶部 -->
    <back-top
      @click.native="backTop"
      v-show="isBackTop"
    />
    <!-- 底部工具栏 -->
    <detail-bottom-bar @addToCart="addToCart" />
  </div>
</template>

<script>
// 子组件
import DetailNav from './childComps/DetailNav'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamsInfo from './childComps/DetailParamsInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'
// 公共组件
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'
// AJAX
import {
  getDetail,
  Goods,
  Shop,
  GoodsParams,
  getRecommendGoods
} from 'network/detail'
import { debounce } from 'common/tools'
import { backTopMixin } from 'common/mixins'
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
    DetailBottomBar,
    Scroll,
    GoodsList
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: null,
      // 轮播图
      topImgs: [],
      // 商品信息
      goodsInfo: {},
      // 店铺信息
      shopInfo: {},
      // 商品详情
      detailInfo: {},
      // 商品参数
      paramsInfo: {},
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
    this.iid = this.$route.params.iid
    this.getDetail()
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh)
    this.$bus.$on('detailImgLoad', refresh)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // detailNav的联动效果
    imgLoad: debounce(function() {
        this.$refs.scroll.refresh()
        this.topPositionY = []
        this.topPositionY.push(0)
        this.topPositionY.push(this.$refs.params.$el.offsetTop)
        this.topPositionY.push(this.$refs.comment.$el.offsetTop)
        this.topPositionY.push(this.$refs.recommend.$el.offsetTop)
        this.topPositionY.push(Number.MAX_VALUE)
      }),
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topPositionY[index], 0)
    },
    detailScroll(position) {
      this.listenBackTop(position)
      let py = -position.y
      const TPY = this.topPositionY
      for (let i = 0; i < TPY.length - 1; i++) {
        if (this.currentIndex !== i && py >= TPY[i] && py < TPY[i + 1]) {
          this.currentIndex = i
          this.$refs.detailNav.currentIndex = i
        }
      }
    },
    // 添加购物车
    addToCart() {
      // 获取购物车需要展示的信息
      const cartInfo = {}
      cartInfo.img = this.topImgs[0]
      cartInfo.title = this.goodsInfo.title
      cartInfo.desc = this.goodsInfo.desc
      cartInfo.price = this.goodsInfo.realPrice
      cartInfo.iid = this.iid
      cartInfo.count = 1
      // 添加到购物车
      this.$store.dispatch('addToCart', cartInfo).then(res => {
        this.$toast.show(res)
      })
    },
    /**
     * 网络请求相关方法
     */
    getDetail() {
      getDetail(this.iid).then(res => {
        const data = res.result
        // 获取轮播图信息
        this.topImgs = data.itemInfo.topImages
        // 获取商品信息
        this.goodsInfo = new Goods(
          data.itemInfo,
          data.shopInfo.services,
          data.columns
        )
        // 获取店铺信息
        this.shopInfo = new Shop(data.shopInfo)
        // 获取商品详情
        this.detailInfo = data.detailInfo
        // 获取商品参数
        this.paramsInfo = new GoodsParams(
          data.itemParams.info,
          data.itemParams.rule
        )
        // 获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      })
      getRecommendGoods().then(res => {
        this.recommendGoods = res.data.list
      })
    }
  }
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
  left: 0;
  top: 44px;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
.detail-swiper {
  width: 100%;
  height: 300px;
}
</style>