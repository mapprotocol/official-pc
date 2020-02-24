<template>
  <div id='home' :class="{'language-en': $i18n.locale !== 'zh'}">
    <sys-header></sys-header>

    <!-- 合作伙伴 -->
    <partner-mod></partner-mod>
    <!-- 底部 -->
    <sys-footer></sys-footer>
    <!-- 悬浮框 -->
    <div :class="{'back_top_box showCss': btnFlag, 'back_top_box': !btnFlag}">
      <div class="back_top">
        <a href="javascript:void(0);" @click="toTopHandler"></a>
      </div>
    </div>
  </div>
</template>

<script>
import SysHeader from '@/components/SysHeader'
import SysFooter from '@/components/SysFooter'
export default {
  name: 'home',
  components: {
    SysHeader,
    SysFooter,
  },
  data () {
    return {
      scrollTop: 0, // 回到顶部-上滑距离
      btnFlag: false, // 回到顶部-第一屏不展示
      showFlag: false, // 确定是否出现小点点。
      navMainW: 0,
      navMainH: 0
    }
  },
  methods: {
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    scrollHandler () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.btnFlag = this.scrollTop > 58
    },
    toTopHandler () {
      let that = this
      let topTimer = setInterval(() => {
        let speedVal = Math.floor(-that.scrollTop / 50)
        document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + speedVal
        if (that.scrollTop === 0) {
          clearInterval(topTimer)
        }
      }, 16)
    }
  },
  mounted () {
    let navDom = document.querySelector('#navMain')
    this.navMainW = navDom.clientWidth
    this.navMainH = navDom.clientWidth

    window.addEventListener('scroll', this.scrollHandler, true)
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="less" scoped>
  #home {
  }
</style>
