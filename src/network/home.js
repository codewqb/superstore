import {
  request
} from "./request";
// 请求多个数据
export function getHomeMultidata() {
  return request({
    method: 'GET',
    url: '/home/multidata'
  })
}
// 请求商品数据
export function getHomeGoods(type, page) {
  return request({
    method: 'GET',
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
