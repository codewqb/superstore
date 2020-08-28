<template>
  <div class="toast" v-show="isShow">
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message, delay = 2000) {
      this.message = message;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, delay);
    }
  },
}
</script>

<style lang="less" scoped>
.toast {
  z-index: 999;
  position: fixed;
  padding: 8px 10px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
}
</style>