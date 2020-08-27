import BackTop from 'components/content/backtop/BackTop';
import { BACKTOP_POSITION } from './const'
export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isBackTop: false
    }
  },
  methods: {
    // 返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenBackTop(position) {
      // 控制返回顶部显示与隐藏
      this.isBackTop = -position.y > BACKTOP_POSITION;
    }
  },
}
