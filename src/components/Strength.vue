<template>
  <div class="str" id="strength">
    <div class="str-bg">
      <div class="str-container">
        <div class="title">{{ $t('Strength.title') }}</div>
        <div class="title-line"></div>
        <!--              content-->
        <div class="str-content">
          <div class="str-info">
            <img src="../assets/image/strength/img1.png"/>
            <div class="str-info-title">{{ $t('Strength.info.one.title') }}</div>
            <div class="str-info-info">{{ $t('Strength.info.one.info') }}</div>
          </div>
          <div class="str-info">
            <img src="../assets/image/strength/img2.png"/>
            <div class="str-info-title">{{ $t('Strength.info.two.title') }}</div>
            <div class="str-info-info">{{ $t('Strength.info.two.info') }}</div>
          </div>
          <div class="str-info">
            <img src="../assets/image/strength/img3.png"/>
            <div class="str-info-title">{{ $t('Strength.info.three.title') }}</div>
            <div class="str-info-info">{{ $t('Strength.info.three.info') }}</div>
          </div>
          <div class="str-info">
            <img src="../assets/image/strength/img4.png"/>
            <div class="str-info-title">{{ $t('Strength.info.four.title') }}</div>
            <div class="str-info-info">{{ $t('Strength.info.four.info') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import '../assets/less/map.less'

export default {
  name: 'Strength'
}
</script>

<style scoped lang="less">

.str {
  position: relative;
  background: #181818;
  display: flex;
  align-content: center;
  justify-content: center;
}

.str-container {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.str-bg {
  margin-top: 12px;
  margin-bottom: 24px;
  width: 1512px;
  //height: 748px;
  background: url("../assets/image/strength/bg.png") no-repeat;
  background-size: 100% 100%;
}

.title {
  padding-top: 104px;
}

.str-content {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding-top: 108px;
  //padding-bottom: 91px;
  width: 80%;
}

.str-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 23%;

  img {
    width: 137px;
  }
}

.str-info-title {
  padding-top: 20px;
  text-align: center;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #E44E3A;
}

.str-info-info {
  width: 66%;
  display: flex;
  flex-direction: column;
  padding-top: 26px;
  padding-bottom: 180px;
  text-align: center;
  font-size: 14px;
  font-family: Helvetica;
  color: #FFFFFF;
  line-height: 20px;
}

@media (max-width: 1512px) {
  .str-bg {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .str-container {
    width: 100%;
  }

  .str-content {
    width: 80%;
  }

  .str-info {
    img {
      width: 100px;
    }
  }
}


</style>
