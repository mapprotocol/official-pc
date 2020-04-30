<style scoped lang="less">
  #scenarios {
    width: 100%;
    min-height: 825px;
    background: #EAEAEA;
  }
  .sce-container {
    width: 1200px;
    margin: 0 auto;
  }
  .sce-title {
    display: block;
    width: 65%;
    padding: 113px 0 86px 0;
    text-align: center;
    font-size: 30px;
    font-family: Helvetica-Bold, Helvetica;
    font-weight: bold;
    color: #000000;
    line-height: 36px;
    margin: 0 auto;
  }
  .sce-item {
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
    li {
      width: calc(23.5% - 2px);
      margin-right: 2%;
      margin-bottom: 28px;
      border:1px solid #B6B6B6;
      min-height: 207px;
      &:nth-child(4n+4) {
        margin-right: 0;
      }
      .sce_name {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        font-size:22px;
        font-family: PingFangSC-Semibold,PingFang SC;
        font-weight:600;
        color: #000000;
        line-height:30px;
      }
      .sce-common {
        display: block;
        margin: 0 auto;
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .finance {
        width: 70px;
        height: 70px;
        background-image: url("../assets/image/scenarios/finance.png");
        margin: 44px auto 31px auto;
        &:hover {
          background-image: url("../assets/image/scenarios/finance_h.png")
        }
      }
      .ai {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/ai.png");
        margin: 39px auto 30px auto;
        &:hover {
          background-image: url("../assets/image/scenarios/ai_h.png")
        }
      }
      .iot {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/iot.png");
        margin: 41px auto 28px auto;
        &:hover {
          background-image: url("../assets/image/scenarios/iot_h.png")
        }
      }
      .trace {
        width: 75px;
        height: 65px;
        background-image: url("../assets/image/scenarios/trace.png");
        margin: 44px auto 36px auto;
      }
      .governance {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/governance.png");
        margin: 35px auto 28px auto;
      }
      .privacy {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/governance.png");
        margin: 36px auto 27px auto;
      }
      .shared {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/shared.png");
        margin: 37px auto 26px auto;
      }
      .more {
        width: 76px;
        height: 76px;
        background-image: url("../assets/image/scenarios/more.png");
        margin: 37px auto 26px auto;
      }
      &:hover {
        background-image: url("../assets/image/scenarios/bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        .sce_name {
          color: #ffffff;
        }
        .finance {
          background-image: url("../assets/image/scenarios/finance_h.png")
        }
        .ai {
          background-image: url("../assets/image/scenarios/ai_h.png")
        }
        .iot {
          background-image: url("../assets/image/scenarios/iot_h.png")
        }
        .trace {
          background-image: url("../assets/image/scenarios/trace_h.png")
        }
        .governance{
          background-image: url("../assets/image/scenarios/governance_h.png")
        }
        .privacy {
          background-image: url("../assets/image/scenarios/governance_h.png")
        }
        .shared {
          background-image: url("../assets/image/scenarios/shared_h.png")
        }
        .more {
          background-image: url("../assets/image/scenarios/more_h.png")
        }
      }
    }
  }
  @media(max-width: 1200px) {
    .sce-container{
      width: 100%;
    }
    .sce-item {
      flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      li {
        width: 75%;
        margin: 0 12.5% 20px 12.5%;
        &:nth-child(4n+4) {
          margin-right: 12.5%;
        };
      }
    }
  }
  @media(max-width: 480px) {
    .sce-title {
      width: 83%;
      padding: 66px 0 58px 0
    }
    .sce-item {
      li:last-child {
        margin: 0 12.5% 83px 12.5%
      }
    }
  }
</style>
<template>
  <div class="scenarios" id="scenarios">
    <div class="sce-container">
      <p :class="['sce-title', 'animated fadeInUp']">{{$t('Scenarios.title')}}</p>
      <ul class="sce-item">
        <li @mouseover="move(ins)" @mouseout="delMove(ins)" :id="'sce_itemLi' + ins" v-for="(item, ins) in $t('Scenarios.list')" :key="'pro_' + ins">
          <span :class="[item.icon, 'sce-common']"><i></i></span>
          <p class="sce_name">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scenarios.vue',
  methods: {
    move (ins) {
      document.querySelector('#sce_itemLi' + ins).setAttribute('class', 'animated bounce ')
    },
    delMove (ins) {
      document.querySelector('#sce_itemLi' + ins).setAttribute('class', '')
    }
  }
}
</script>
