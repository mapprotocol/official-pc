<style scoped lang="less">
  .pro-container {
    width: 1200px;
    margin: 0 auto;
  }
  .pro-title {
    width: 65%;
    margin: 92px auto 95px auto;
    text-align: center;
    font-size:30px;
    font-family:Helvetica-Bold,Helvetica;
    font-weight:bold;
    color: #000000;
    line-height:36px;
  }
  .pro-item {
    display: flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    justify-content: center;
    -webkit-justify-content: center;
    -webkit-align-content: center;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    align-items: center;
    -webkit-align-items: center;
      .core-common {
      display: block;
      width:93px;
      height:93px;
      margin: 0 auto;
      background: #FFFFFF;
      border-radius:14px;
      border:1px solid #C6C6C6;
      i {
        display: block;
        width: 52px;
        height: 52px;
        margin: 21px 20px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
    .core1 {
      i {
        background-image: url("../assets/image/protocol/core1.png");
      }
    }
    .core1 {
      i {
        background-image: url("../assets/image/protocol/core1.png");
      }
    }
    .core2 {
      i {
        background-image: url("../assets/image/protocol/core2.png");
      }
    }
    .core3 {
      i {
        background-image: url("../assets/image/protocol/core3.png");
      }
    }
    .core4 {
      i {
        background-image: url("../assets/image/protocol/core4.png");
      }
    }
    .core5 {
      i {
        background-image: url("../assets/image/protocol/core5.png");
      }
    }
    li {
      width: 28%;
      margin-right: 8%;
      margin-bottom: 84px;
      &:nth-child(3n+3) {
        margin-right: 0;
      }
    }
    .pro_name {
      text-align: center;
      padding: 0 3.6%;
      font-size:22px;
      font-family:Helvetica-Bold,Helvetica;
      font-weight:bold;
      color: #000000;
      line-height:30px;
      margin: 25px auto 5px auto;
    }
    .pro_info {
      width:329px;
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      font-weight:400;
      color: #000000;
      line-height:28px;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media(max-width: 1200px) {
    .pro-container{
      width: 100%;
    }
    .pro-item {
      /*flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;*/
      li {
        width: 100%;
        margin-right: 0;
      }
      .pro_info {
        width: 90.4%;
      }
    }
  }
  @media(max-width: 480px) {
    .pro-title {
      width: 83%;
      margin: 64px auto;
    }
    .pro-item {
      li {
        margin-bottom: 58px;
      }
    }
  }
</style>
<template>
  <div class="protocol" id="whyId"  v-animate-onscroll.repeat="{down: 'animated fadeInUp'}">
    <div class="pro-container">
      <p :class="['pro-title', {'animated fadeInUp': flag}]">{{$t('Protocol.title')}}</p>
      <ul class="pro-item">
        <li v-for="(item, ins) in $t('Protocol.list')" :key="'pro_' + ins"
          :class="{
            'animated fadeInLeft delay-2s': ins === 0 && flag,
            'animated fadeInUp delay-3s': ins === 1 && flag,
            'animated fadeInRight delay-2s': ins === 2 && flag,
            'animated fadeInLeft delay-4s': ins === 3 && flag,
            'animated fadeInRight delay-4s': ins === 4 && flag
          }">
          <span :class="[item.icon, 'core-common']"><i></i></span>
          <p class="pro_name">{{item.title}}</p>
          <p class="pro_info" v-for="(sonItem, sonIns) in item.info" :key="'pro_son_' + sonIns">{{sonItem}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Protocol.vue',
  data () {
    return {
      flag: true,
      interTimer: null
    }
  },
  mounted () {
    let that = this;
    this.interTimer = setInterval(function () {
      let subCoreDom = document.querySelector('#whyId')
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
