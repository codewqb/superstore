import {
  ADD_COUNT,
  ADD_CART
} from './mutation-types';
export default {
  addToCart({
    state,
    commit
  }, payload) {
    return new Promise((resolve, reject) => {
      let newInfo = state.cartList.find(item => item.iid === payload.iid)
      if (newInfo) {
        commit(ADD_COUNT, newInfo);
        resolve('商品的数量+1');
      } else {
        commit(ADD_CART, payload);
        resolve('添加了新的商品');
      }
    })
  }
}
