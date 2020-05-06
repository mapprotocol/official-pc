<style scoped lang="less">
  .census {
    width: 100%;
    min-height:354px;
    height: auto;
    background: #2D2D2D;
  }
  .census-container {
    width: 1200px;
    margin: 0 auto;
    position: relative;
    .bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 1199px;
      height: 354px;
      background-image: url("../assets/image/census/bg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      z-index: 20;
    }
    .census-layout {
      width: 100%;
      position: relative;
      left: 0;
      top: 0;
      z-index: 50;
    }
  }
  .census-item {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding-top: 102px;
    li {
      width: 27.3%;
      margin-right: 9%;
      text-align: center;
      &:last-child {
        margin-right: 0;
      }
      span {
        display: block;
        text-align: center;
        margin-bottom: 20px;
        font-size:50px;
        font-family:JDZhengHT-Regular,JDZhengHT;
        font-weight:400;
        color: #ffffff;
        line-height:60px;
        &.tex-info {
          width: 100%;
          span.tex {
            display: inline-block;
          }
        }
      }
      a {
        text-decoration: none;
        display: inline-block;
        width: auto;
        text-align: center;
        border-radius:26px;
        border:1px solid #BBBBBB;
        padding: 12px 29px 14px 33px;
        font-size:20px;
        font-family:Helvetica;
        color: #BBBBBB;
        line-height:24px;
      }
    }
  }
  @media(max-width: 1200px) {
    .census-container{
      width: 100%;
      .bg {
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .census-item {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      li {
        width: 100%;
        margin-right: 0;
        margin-bottom: 80px;
      }
    }
  }
  @media(max-width: 480px) {
    .census-item {
      padding-top: 69px;
      li {
        span.tex-info {
          margin-bottom: 0;
        }
        &:last-child {
          margin-bottom: 101px;
        }
      }
    }
  }
</style>
<template>
  <div class="census" id="censusId"  v-animate-onscroll="{down: 'animated fadeInUp'}">
    <div class="census-container">
      <div class="bg"></div>
      <div class="census-layout">
        <ul class="census-item">
          <li v-for="(item, ins) in $t('Census.infos')" :key="'census_' + ins" :class="['animated fadeInUp', {'delay-1s': ins === 2, 'delay-2s': ins === 1}]">
            <span class="tex-info"> <countTo class="tex" :startVal='0' :endVal='item.count' :duration='3000'></countTo>+</span>
            <a href="javascript:void(0);">{{item.btnName}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'Census.vue',
  components: { countTo }
}
</script>
