<template>
  <div class="check-button" :class="{check:isChecked}">
    <img src="@/assets/imgs/cart/tick.svg" />
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      deefault() {
        return false;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.check-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 50%;
  border: 2px solid #aaa;
  img{
    display: block;
  }
}
.check {
  border-color: red;
  background-color: red;
}
</style>