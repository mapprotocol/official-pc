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
    width: 61.5%;
    margin: 0 auto 16px auto;
    text-align: center;
    font-size:20px;
    font-family:PingFangSC-Semibold,PingFang SC;
    font-weight:600;
    color: #000000;
    line-height:28px;
  }
  .int-introduce {
    width: 65%;
    margin: 0 auto 108px auto;
    font-size:14px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color: #000000;
    line-height:28px;
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
</style>
<template>
  <div class="introduce" id="introduceId">
    <div class="next-down"></div>
    <div :class="['int-title', 'animated fadeInUp']">{{$t('Introduce.title')}}</div>
    <div class="int-introduce">{{$t('Introduce.introduce')}}</div>
    <div class="init-btns" id="whiteId">
      <a :href="item.url" target="_blank" v-for="(item, ins) in $t('Introduce.BtnLink')" :key="'btn_' + ins">{{item.name}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduce.vue'
}
</script>

