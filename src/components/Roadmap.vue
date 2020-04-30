<style scoped lang="less">
  .road-map {
    width: 100%;
   /* min-height: 990px;*/
  }
  .road-container {
    width: 1200px;
    margin: 0 auto;
  }
  .road-title {
    display: block;
    width: 65%;
    padding: 103px 0 99px 0;
    text-align: center;
    font-size: 30px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #000000;
    line-height: 36px;
    margin: 0 auto;
  }
  .road-ctx {
    overflow: hidden;
    position: relative;
    margin: 0 auto 83px auto;
    z-index: 0;
    /*&:after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: #203260;
      top: 18px;
      bottom: 0;
      left: 50%;
      border-radius: 10px;
      margin-left: -3px;
    }*/
    .road-row {
      position: relative;
      width: calc(50% - 54px);
      left: 50%;
      clear: both;
      text-align: left;
      padding: 0 27px;
      &:before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #203260;
        top: 18px;
        bottom: 0;
        left: 0;
        border-radius: 10px;
        margin-left: -3px;
      }
      &:after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        left: -14px;
        background-color: #ffffff;
        border: 4px solid #171717;
        top: 0;
        border-radius: 50%;
        z-index: 50;
      }
      &:nth-child(2n+2) {
        left: 0;
        text-align: right;
        &:before {
          left: unset;
          right: 1px;
        }
        &:after {
          left: unset;
          right: -8px;
        }
      }
      .item-title {
        font-size:22px;
        font-family:Helvetica-Bold,Helvetica;
        font-weight:bold;
        color: #000000;
        line-height:26px;
        margin-bottom: 12px;
      }
      .item-subTitle {
        font-size:18px;
        font-family:PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #000000;
        line-height:25px;
        margin-bottom: 10px;
      }
      ul {
        min-height: 100px;
        li {
          list-style-type: none;
          font-size:14px;
          font-family:PingFangSC-Regular,PingFang SC;
          font-weight:400;
          color: #000000;
          line-height:20px;
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .road-container{
      width: 100%;
    }
    .road-ctx {
     /* &:after {
        left: 32px;
      }*/
      .road-row{
        width: calc(100% - 72px);
        left: 18px;
        padding: 0 27px 0 27px;
        &:before {
          left: 13px;
        }
        &:after {
          left: 0;
        }
        &:nth-child(2n+2) {
          text-align: left;
          padding: 0 27px 0 45px;
          &:before {
            left: 30px;
            right: unset;
          }
          &:after {
            left: 18px;
          }
        }
      }
    }
  }
  @media(max-width: 480px) {
    .road-title {
      width: 83%;
      padding: 66px 0 46px 0;
    }
    .road-ctx {
      .road-row {
        padding: 0 27px 0 32px;
        ul {
          padding-bottom: 20px;
        }
      }
    }
  }
</style>
<template>
  <div class="road-map" id="roadMapId">
    <div class="road-container">
      <div :class="['road-title', 'animated fadeInUp']">{{$t('Roadmap.title')}}</div>
      <div class="road-ctx">
        <div :class="['road-row', {'animated fadeInRight': ins % 2 === 0, 'animated fadeInLeft': ins % 2 !== 0}, 'delay-'+ins+'s']" v-for="(item, ins) in $t('Roadmap.list')" :key="'road_' + ins">
          <div class="item-title">{{item.time}}</div>
          <div class="item-subTitle">{{item.title}}</div>
          <ul>
            <li v-for="(sonItem, sonIns) in item.introduce" :key="'road_son_' + sonIns">{{sonItem}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoadMap.vue'
}
</script>

