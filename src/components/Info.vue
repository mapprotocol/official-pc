<style scoped lang="less">
  .info-container {
    width: 1200px;
    margin: 0 auto;
  }
  .info-item {
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding-top: 102px;
    li {
      width: 28%;
      margin-right: 8%;
      margin-bottom: 84px;
      text-align: center;
      &:nth-child(3n+3) {
        margin-right: 0;
      }
    }
    .info-name {
      display: block;
      width:176px;
      font-size:22px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color: #000000;
      line-height:30px;
      padding-bottom: 16px;
      border-bottom: 4px solid #000000;
      margin: 0 auto 44px auto;
    }
    .info-remark {
      width: 80%;
      margin: 0 auto;
      font-size:14px;
      font-family:PingFangSC-Medium,PingFang SC;
      font-weight:500;
      color: #000000;
      line-height:20px;
    }
  }
  @media(max-width: 1200px) {
    .info {
      background: #F5F5F5;
    }
    .info-container{
      width: 100%;
    }
    .info-item {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      li {
        width: 100%;
        margin-right: 0;
      }
    }
  }
  @media(max-width: 480px) {
    .info-item {
      padding-top: 78px;
    }
  }
</style>
<template>
  <div class="info" id="info"  v-animate-onscroll="{down: 'animated fadeInUp'}">
    <div class="info-container">
      <ul class="info-item">
        <li v-for="(item, ins) in $t('Info.list')" :key="'pro_' + ins" :class="'animated fadeInUp delay-' +(ins)+ 's'">
          <span class="info-name">{{item.name}}</span>
          <p class="info-remark" v-for="(sonItem, sonIns) in item.remark" :key="'pro_son_' + sonIns">{{sonItem}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info.vue'
}
</script>
