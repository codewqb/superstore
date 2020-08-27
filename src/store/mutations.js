import {
  ADD_COUNT,
  ADD_CART,
  CHECK_GOODS,
  ALL_CHECK
} from './mutation-types';
export default {
  [ADD_COUNT](state, payload) {
    payload.count++;
  },
  [ADD_CART](state, payload) {
    payload.checked = true;
    state.cartList.push(payload);
  },
  [CHECK_GOODS](state, payload) {
    payload.checked = !payload.checked;
  },
  [ALL_CHECK](state, payload) {
    if (payload) {
      state.cartList.forEach(item => item.checked = false);
    } else {
      state.cartList.forEach(item => item.checked = true);
    }
  }

}
