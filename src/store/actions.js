import {
  ADD_COUNT,
  ADD_CART
} from './mutation-types';
export default {
  addToCart({
    state,
    commit
  }, payload) {
    let newInfo = state.cartList.find(item => item.iid === payload.iid)
    if (newInfo) {
      commit(ADD_COUNT, newInfo)
    } else {
      commit(ADD_CART, payload);
    }
  }
}
