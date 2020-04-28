<style scoped lang="less">
  .footer {
    clear: both;
    width: 100%;
    min-height: 482px;
    background: #000000;
    padding-top: 73px;
    ul,li {
      list-style-type: none;
    }
    a {
      text-decoration: none;
    }
  }
  .ft-container {
    width: 1200px;
    margin: 0 auto;
  }
  .ft-logo {
    width: 127px;
    height: 127px;
    background-image: url("../assets/image/footer/logo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 0 auto 51px auto;
  }
  .ft-mobile-copyRight {
    display: none;
    width: 80%;
    word-break: break-all;
    text-align: center;
    padding-top: 41px;
    padding-bottom: 102px;
    font-size:14px;
    font-family: PingFangSC-Regular,PingFang SC;;
    font-weight:400;
    color: #FFFFFF;
    line-height:20px;
    margin: 0 auto;
  }
  .ft-ctx {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: baseline;
    -webkit-align-items: baseline;
    -ms-align-items: baseline;
  }
  .ctx-left{
    .ft-investor{
      margin-bottom: 41px;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size:20px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #ffffff;
        line-height:28px;
      }
      a{
        display: inline-block;
        vertical-align: middle;
        width: 116px;
        height: 24px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 16px;
      }
      .ft-soft{
        background-image: url("../assets/image/footer/soft.png");
      }
    }
    .ft-social{
      margin-bottom: 33px;
      span{
        display: inline-block;
        vertical-align: middle;
        font-size:20px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #ffffff;
        line-height:28px;
      }
      a{
        display: inline-block;
        vertical-align: middle;
        width: 28px;
        height: 28px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        margin-right: 26px;
      }
      .ft-telegram {
        background-image: url("../assets/image/footer/telegram.png");
      }
      .ft-twitter {
        background-image: url("../assets/image/footer/twitter.png");
      }
      .ft-bitcointalk {
        background-image: url("../assets/image/footer/bitcointalk.png");
      }
      .ft-naver {
        background-image: url("../assets/image/footer/naver.png");
      }
      .ft-medium {
        background-image: url("../assets/image/footer/medium.png");
      }
      .ft-kakao{
        background-image: url("../assets/image/footer/kakao.png");
      }
      .ft-cat {
        background-image: url("../assets/image/footer/cat.png");
      }
    }
    .ft-copyright {
      span {
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        /*color: #CCCCCC;*/
        color: #FFFFFF;
        line-height:20px;
      }
    }
  }
  .ft-sup-title {
    font-size: 20px;
    font-family: Helvetica;
    color:  #FFFFFF;
    line-height: 24px;
    margin-bottom: 26px;
  }
  .ft-sup-li {
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    /*color: #CCCCCC;*/
    color: #FFFFFF;
    font-weight:400;
    line-height:20px;
    margin-bottom: 15px;
    a {
      font-size:14px;
      font-family:PingFangSC-Regular,PingFang SC;
      /*color: #CCCCCC;*/
      color: #FFFFFF;
      font-weight:400;
    }
  }
  @media(max-width: 1200px) {
    .ft-container{
      width: 100%;
    }
    .ft-mobile-copyRight {
      display: block;
    }
    .ft-ctx {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      .ft-copyright {
        display: none;
      }
      .ctx-left {
        width: 100%;
        text-align: center;
      }
      .ctx-center {
        margin-top: 46px;
        width: 100%;
        text-align: center;
      }
      .ctx-right {
        margin-top: 41px;
        width: 100%;
        text-align: center;
      }
    }
  }
</style>
<template>
  <div class="footer" id="footer">
    <div class="ft-container">
      <div class="ft-logo"></div>
      <div class="ft-ctx">
        <ul class="ctx-left">
          <li class="ft-investor">
            <span>{{$t('Footer.Investor.label')}}</span>
            <a :href="item.url" :class="item.icon" v-for="(item, ins) in $t('Footer.Investor.IconList')" :key="'ft_' + ins"></a>
          </li>
          <li class="ft-social">
            <span>{{$t('Footer.SocialMedia.label')}}</span>
            <a :href="item.url" :class="item.icon" v-for="(item, ins) in $t('Footer.SocialMedia.IconList')" :key="'ft_' + ins"></a>
          </li>
          <li class="ft-copyright">
            <span>{{$t('Footer.Copyright')}}</span>
          </li>
        </ul>
        <ul class="ctx-center" id="walletId">
          <li class="ft-sup-title">{{$t('Footer.Support.title')}}</li>
          <li class="ft-sup-li" v-for="(item,sonIns) in $t('Footer.Support.list')" :key="'sup_li_' + sonIns">
            <a :href="item.url">{{item.name}}</a>
          </li>
        </ul>
        <ul class="ctx-right">
          <li class="ft-sup-title">{{$t('Footer.ContactUs.title')}}</li>
          <li class="ft-sup-li" v-for="(item,sonIns) in $t('Footer.ContactUs.list')" :key="'const_li_' + sonIns">{{item.name}}</li>
        </ul>
      </div>
      <div class="ft-mobile-copyRight">{{$t('Footer.Copyright')}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer.vue'
}
</script>
