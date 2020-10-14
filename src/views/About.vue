<template>
  <div id='download'>
    <div class='area'>
      <div class="down-bg"></div>
      <div class='inter'>
        <div class='logo'></div>
        <h2>{{$t('PointsWaves.title')}}</h2>
        <p>{{$t('PointsWaves.subTitle')}}</p>
        <img src="../assets/image/down/erCode.png" />
      </div>
      <div v-if="isAndroid">
        <a
          class='btn'
          href="https://files.maplabs.io/app/MarcoPay.apk"
        >
          Download APK
        </a>
        <a
          class='btn'
          href="https://play.google.com/store/apps/details?id=com.marcopay"
        >Google Play
        </a>
      </div>
      <div v-else>
        <div
          class='btn'
          @click='download'
        >
          Download
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isAndroid: false,
      isIOS: true
    }
  },
  mounted () {
    this.getOs()
  },
  methods: {
    getOs () {
      const u = navigator.userAgent
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
      const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
      this.isAndroid = isAndroid
      this.isIOS = isIOS
    },
    download () {
      const { isIOS } = this
      isIOS ? window.open('https://testflight.apple.com/join/LpZbwecg') : alert('Please open this link using your mobile phone. ')
    }
  }
}
</script>

<style scoped lang="less">
  #download {
    width: 100%;
    height: 100%;
    background: #ffffff;
  }
  .flex() {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #download {
    .flex();
    width: 100%;
    height: 100vh;
    background: #ffffff;
    padding-top: 164px;
    a {
      text-decoration: none;
      margin-bottom: 15px;
    }
    .area {
      .flex();
      width: 80%;
      height: 100%;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      .inter {
        .flex();
        flex-direction: column;
        margin-bottom: 83px;
        position: relative;
        z-index: 1000;
        min-height: 872px;
        .logo {
          width: 230px;
          height: 205px;
          background-size: 100% 100%;
          background-image: url('../assets/image/down/logo.png');
          margin-bottom: 46px;
          margin-top: 46px;
        }
        h2 {
          font-size:60px;
          font-family:Helvetica-Bold,Helvetica;
          font-weight:bold;
          color:rgba(0,0,0,1);
          line-height:72px;
          margin-bottom: 21px;
          text-align: center;
        }
        p {
          font-size:20px;
          font-family:PingFangSC-Medium,PingFang SC;
          font-weight:500;
          color:rgba(0,0,0,1);
          line-height:28px;
          margin-bottom: 59px;
          text-align: center;
        }
        img {
          margin: 0 auto;
          width: 264px;
          height: 264px;
          display: block;
          border: 4px solid #000000;
        }
      }
      .down-bg {
        position: absolute;
        width: 1506px;
        height: 571px;
        top: 0;
        background-image: url("../assets/image/down/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
      .btn {
        .flex();
        width:268px;
        height:69px;
        background: #0B0B0B;
        border-radius:4px;
        border:3px solid #000000;
        cursor: pointer;
        text-align: center;
        font-size:30px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color: #ffffff;
        line-height:42px;
      }
    }
  }
  @media(max-width: 1506px) {
    #download .area .down-bg {
      width: 100%;
      height: 37.9%;
    }
    #download .area .inter h2{
          font-size: 30px;
          line-height: 36px;
    }
    #download .area .inter p {
          font-size:14px;
          line-height:20px;
          margin-top: 13px;
    }
  }
  @media(max-width: 320px) {
    #download .area .inter .logo {
      margin-top: 164px;
    }
  }
</style>
