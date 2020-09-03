<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <p class="info-title">用户评价</p>
      <p class="info-more">
        更多
        <i class="fas fa-angle-right"></i>
      </p>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created * 1000|dateFormat }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img :src="item" v-for="(item, index) in commentInfo.images" :key="index" alt />
      </div>
    </div>
  </div>
</template>

<script>
import { dateFormat } from 'filters/filter';
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    dateFormat
  }
}
</script>

<style lang="less" scoped>
.comment-info {
  width: 100%;
  padding: 5px 10px;
  .info-header {
    display: flex;
    justify-content: space-between;
    line-height:40px;
    color: #222;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    .info-title {
      font-size: 14px;
    }
    .info-more {
      font-size: 14px;
    }
  }
  .info-user {
    line-height: 60px;
    img {
      position: relative;
      top: -2px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      vertical-align: middle;
    }
    span {
      margin-left: 10px;
      font-size: 16px;
      color: #222;
    }
  }
  .info-detail {
    font-size: 14px;
    .info-other {
      line-height: 34px;
    }
    .info-imgs {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      width: 100%;
      img {
        width: 75px;
        height: 75px;
        margin-right: 8px;
      }
    }
  }
}
</style>