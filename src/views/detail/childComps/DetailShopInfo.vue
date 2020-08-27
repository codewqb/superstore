<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shopInfo.shopLogo" alt />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="sells-info">
          <p class="sells-count">{{ shopInfo.sells| sellsFormat }}</p>
          <p class="sells-text">总销量</p>
        </div>
        <div class="all-goods">
          <p class="goods-count">{{ shopInfo.goodsCount }}</p>
          <p class="goods-text">全部宝贝</p>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item, index) in shopInfo.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{ item.score }}</td>
            <td class="lower" :class="{'high': item.isBetter}">
              <span>{{ item.isBetter ? '高' : '低' }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellsFormat(val) {
      if (val < 10000) {
        return val;
      } else {
        return (val / 10000).toFixed(1) + '万';
      }
    }
  }
}
</script>

<style lang="less" scoped>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  .shop-top {
    line-height: 45px;
    img {
      display: inline-block;
      width: 45px;
      height: 45px;
      vertical-align: middle;
      border-radius: 50%;
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    span {
      margin-left: 15px;
      vertical-align: middle;
    }
  }
  .shop-middle {
    margin-top: 15px;
    display: flex;
    align-items: center;
    .shop-middle-left {
      flex: 1;
      display: flex;
      justify-content: space-evenly;
      color: #333;
      text-align: center;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .shop-middle-right {
      flex: 1;
      font-size: 13px;
      color: #333;
    }
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
    .enter-shop {
      display: inline-block;
      width: 150px;
      height: 30px;
      text-align: center;
      line-height: 30px;
      font-size: 14px;
      background-color: #f2f5f8;
      border-radius: 10px;
    }
  }
}
.sells-count,
.goods-count {
  font-size: 16px;
}
.sells-text,
.goods-text {
  margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right table {
  width: 130px;
  margin-left: 30px;
  text-align: center;
  td {
    padding: 5px 0;
  }
}
.score {
  color: #5ea732;
}
.score-better {
  color: #f13e3a;
}
.lower span {
  color: #fff;
  background-color: #5ea732;
}
td.high span {
  text-align: center;
  background-color: #f13e3a;
}
</style>