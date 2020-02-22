<template>
  <div id='home' :class="{'language-en': $i18n.locale !== 'zh'}">
    <sys-header></sys-header>
    <!-- 导航栏 -->
    <section class="nav" @mouseover.prevent.stop="showFlag = true;" @mouseout.prevent.stop="showFlag = false;" :class="'nav-' + $i18n.locale">
      <div class="layout-main" id="navMain">
        <!-- 底部特效 -->
        <animate-bg v-if="navMainW > 0 && navMainH > 0" :vWidth="navMainW" v-show="showFlag"></animate-bg>
        <div :class="{'layout-banner-title': $i18n.locale === 'zh', 'layout-banner-title-en': $i18n.locale !== 'zh' && $i18n.locale !== 'ko', 'layout-banner-title-ko': $i18n.locale === 'ko'}"></div>
        <div class="layout-banner-remark">{{$t('home.banner.desc').join('')}}</div>
        <div class="layout-v-line"></div>
        <div class="layout-s-line"></div>
        <div class="layout-banner-lt"></div>
        <!-- 头部动画层 -->
        <div class="layout-animate0"></div>
        <div class="layout-animate1"></div>
        <div class="layout-animate2"></div>
        <div class="layout-animate3"></div>
        <div class="layout-animate4"></div>
        <div class="layout-animate5"></div>

        <!-- div 链间共享区域 -->
        <ul class="ctx-main layout-chain">
          <li v-for="(trueItem, index) in $t('home.chainInfo')" :key="index" :class="{'bdOther': index > 2}">
            <img src="../assets/images/banner_li1.png" v-if="index === 0"/>
            <img src="../assets/images/banner_li2.png" v-if="index === 1"/>
            <img src="../assets/images/banner_li3.png" v-if="index === 2"/>
            <img src="../assets/images/banner_li4.png" v-if="index === 3"/>
            <img src="../assets/images/banner_li5.png" v-if="index === 4"/>
            <img src="../assets/images/banner_li6.png" v-if="index === 5"/>
            <h1>{{trueItem.title}}</h1>
            <p>{{trueItem.desc.join('')}}</p>
          </li>
        </ul>
      </div>
    </section>
    <!-- 点对点 -->
    <section class="points" :class="'points-' + $i18n.locale">
      <div class="layout-main">
        <div class="points-title">
          <span class="title-left" v-if="$i18n.locale === 'en' || $i18n.locale === 'ko' || $i18n.locale === 'zh'"></span>
          <span> {{$t('home.pointsInfo.title')}}</span>
          <span class="title-right" v-if="$i18n.locale === 'en' || $i18n.locale === 'ko' || $i18n.locale === 'zh'"></span>
        </div>
        <div class="ctx-main">
          <div>
            <img src="../assets/images/points_tag.png"/>
          </div>
          <div>
            <div class="points-left">
              <p v-for="(item, i) in $t('home.pointsInfo.leftDescList')" :key="i">{{item}}</p>
            </div>
            <div class="points-center">
              <p v-for="(item, i) in $t('home.pointsInfo.centerDescList')" :key="i">{{item}}</p>
            </div>
            <div class="points-right">
              <p v-for="(item, i) in $t('home.pointsInfo.rightDescList')" :key="i">{{item}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 社区激励 -->
    <impare-mod></impare-mod>
    <!-- 路线图 -->
    <map-china></map-china>
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
import AnimateBg from '@/components/AnimateBg'
import ImpareMod from '@/components/ImpareMod'
import MapChina from '@/components/MapChina'
import PartnerMod from '@/components/PartnerMod'
export default {
  name: 'home',
  components: {
    SysHeader,
    SysFooter,
    AnimateBg,
    ImpareMod,
    MapChina,
    PartnerMod
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
