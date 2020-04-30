<style scoped lang="less">
  #subCore {
    width: 100%;
    min-height:464px;
    height: auto;
    background: #000000;
  }
  .sub-container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .bg {
      position: absolute;
      top: 0;
      left: 66px;
      width: 1068px;
      height: 464px;
      background-image: url("../assets/image/subCore/bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 20;
    }
    .sub-layout {
      width: 100%;
      position: relative;
      left: 0;
      top: 0;
      z-index: 50;
    }
  }
  .sub-title {
    width: 65%;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 36px;
    padding-top: 100px;
  }
  .sub-item {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    margin-top: 102px;
    li {
      width: 27.3%;
      margin-right: 9%;
      margin-bottom: 66px;
      &:last-child {
        margin-right: 0;
      }
      span {
        width: 176px;
        height: 4px;
        background: #FFFFFF;
        display: block;
        margin: 0 auto 36px auto;
      }
      p {
        width: 96%;
        text-align: center;
        font-size:22px;
        font-family:PingFangSC-Medium,PingFang SC;
        font-weight:500;
        color:rgba(255,255,255,1);
        line-height:30px;
        margin: 0 auto;
      }
    }
  }
  @media(max-width: 1200px) {
    .sub-container{
      width: 100%;
      .bg {
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .sub-item {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      li {
        width: 100%;
        margin-right: 0;
      }
    }
  }
</style>
<template>
  <div class="sub-core" id="subCore">
    <div class="sub-container">
      <div class="bg"></div>
      <div class="sub-layout">
        <p :class="['sub-title', 'animated fadeInUp']">{{$t('SubCore.title')}}</p>
        <ul class="sub-item">
          <li v-for="(item, ins) in $t('SubCore.list')" :key="'sub_' + ins">
            <span></span>
            <p v-for="(sonItem, sonIns) in item.desc" :key="'sub_son_' + sonIns">{{sonItem}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCore.vue'
}
</script>
