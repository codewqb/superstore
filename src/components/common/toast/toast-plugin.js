import Toast from './Toast';
const obj = {};
obj.install = function (Vue) {
  // 创建组件构造器
  const Constructor = Vue.extend(Toast);
  // new一个组件对象
  const toast = new Constructor();
  // 将组件对象手动挂载到一个元素上
  toast.$mount(document.createElement('div'));
  // toast.$el对应的就是div
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};
export default obj
