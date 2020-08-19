<style scoped lang="less">
  .introduce {
    padding-bottom: 127px;
  }
  .next-down {
    display: block;
    width: 27px;
    height: 40px;
    background-image: url("../assets/image/introduce/down.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 41px auto 97px auto;
  }
  .int-title {
    max-width: 1200px;
    margin: 0 auto 16px auto;
    text-align: center;
    font-size:20px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color: #000000;
    line-height:28px;
  }
  .int-introduce {
    max-width: 1200px;
    margin: 0 auto 108px auto;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color: #000000;
    line-height:28px;
    text-align: center;
  }
  .init-btns {
    display: flex;
    justify-content: center;
    a {
      text-decoration: none;
      width: 14.8%;
      min-width: 163px;
      /*height: 69px;*/
      background: #000000;
      border-radius:4px;
      border:3px solid #000000;
      margin-right: 7%;
      font-size:30px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color: #ffffff;
      line-height:42px;
      text-align: center;
      padding: 14px 0 13px 0;
      &:last-child{
        margin-right: 0;
      }
    }
  }
  @media(min-width: 1200px) {
    .init-btns {
      a {
        width: 268px;
        margin-right: 134px;
      }
    }
  }
  @media(max-width: 1200px) {
    .int-title {
      width: 83%;
    }
    .int-introduce {
      width: 83%;
    }
  }
  @media(max-width: 480px) {
    .next-down {
      width: 13px;
      height: 25px;
      margin: 88px auto 58px auto;
    }
    .int-title {
      width: 83%;
      font-size:18px;
      line-height:25px;
      margin: 0 auto 40px auto;
    }
    .int-introduce {
      width: 83%;
      margin: 0 auto 70px auto;
    }
    .init-btns a {
      min-width: 163px;
      max-width: 163px;
      padding: 0 0;
      font-size: 18px;
      margin-right: 13px;
    }
    .introduce {
      padding-bottom: 72px;
    }
  }
  @media(max-width: 375px) {
    .init-btns a {
      min-width: 138px;
      max-width: 138px;
    }
  }
</style>
<template>
  <div class="introduce" id="introduceId" v-animate-onscroll.repeat="{down: 'animated slideInUp'}">
    <div class="next-down"></div>
<!--    <div :class="['int-title', {'animated zoomIn': flag}]">{{$t('Introduce.title')}}</div>-->
    <div :class="['int-introduce', {'animated rotateIn delay-1s': flag}]">{{$t('Introduce.introduce')}}</div>
    <div class="init-btns" id="whiteId">
      <a :href="item.url" target="_blank" v-for="(item, ins) in $t('Introduce.BtnLink')" :key="'btn_' + ins">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduce.vue',
  data () {
    return {
      flag: true,
      interTimer: null
    }
  },
  mounted () {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#introduceId')
      if (subCoreDom) {
        let classStr = subCoreDom.classList.toString() || ''
        that.flag = classStr.includes('animated')
      }
    }, 500)
  },
  destroyed () {
    if (this.interTimer) {
      window.clearInterval(this.interTimer)
    }
  }
}
</script>
