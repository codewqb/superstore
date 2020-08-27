import {
  request
} from './request';
export function getDetail(iid) {
  return request({
    method: 'GET',
    url: '/detail',
    params: {
      iid
    }
  })
}
export function getRecommendGoods() {
  return request({
    method: 'GET',
    url: '/recommend'
  })
}
// 整理商品数据
export class Goods {
  constructor(itemInfo, services, columns) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.discount = itemInfo.discountDesc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.realPrice = itemInfo.lowNowPrice;
    this.services = services;
    this.columns = columns;

  }
}
// 整理店铺信息
export class Shop {
  constructor(shopInfo) {
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.goodsCount = shopInfo.cGoods;
    this.score = shopInfo.score;
    this.shopLogo = shopInfo.shopLogo;
  }
}
// 整理商品参数信息
export class GoodsParams {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }

}
