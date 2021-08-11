    <template>
      <div class="road" id="roadMapId" v-animate-onscroll.repeat="{down: 'animated'}">
        <div class="road-bg"></div>
        <div class="road-container">
          <!--      title-->
          <div class="title">{{ $t("Roadmap.title") }}</div>
          <div class="title-line"></div>

          <div class="road-img">
            <div class="road-text">
              <div class="road-text-one">{{ $t("Roadmap.a") }}</div>
              <div class="road-text-one road-text-two">{{ $t("Roadmap.b") }}</div>
              <div class="road-text-one road-text-three">{{ $t("Roadmap.c") }}</div>
              <div class="road-text-one road-text-four">{{ $t("Roadmap.d") }}</div>
              <div class="road-text-one road-text-five">{{ $t("Roadmap.e") }}</div>
            </div>
          </div>
          <div class="road-part">
            <div class="road-part-title">{{ $t("Roadmap.part") }}</div>
            <img src="../assets/image/roadmap/logo.png"/>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'RoadMap',
      data() {
        return {
          flag: true,
          interTimer: null
        }
      },
      methods: {},
      mounted() {
        let that = this;
        this.interTimer = setInterval(function () {
          let subCoreDom = document.querySelector('#roadMapId')
          if (subCoreDom) {
            let classStr = subCoreDom.classList.toString() || ''
            that.flag = classStr.includes('animated')
          }
        }, 500)
      },
      destroyed() {
        if (this.interTimer) {
          window.clearInterval(this.interTimer)
        }
      }
    }
    </script>

    <style scoped lang="less">
    .road {
      position: relative;
      background: #252525;
    }

    .road-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      //width: 1200px;
      margin: 0 auto;
      padding-top: 101px;
      padding-bottom: 120px;
      position: relative;
      z-index: 99
    }


    .road-content {
      padding-top: 85px;
      padding-bottom: 109px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;

    }

    .road-bg {
      position: absolute;
      z-index: 1;
      width: 100%;
      min-height: 100vh;
      background-image:radial-gradient(50% 50% at 50% 50%, #e44e3a29 0, transparent);
      background-position: 0px -30vh;
      background-repeat: no-repeat;
    }

    //

    .title {
      text-align: center;
    }

    .title-line {
      margin-bottom: 110px;
    }

    .road-img {
      width: 100%;
      padding-top: 110px;
      img {
        width: 100%;
      }
    }

    .road-text {
      position: relative;
      width: 100%;
      height: 220px;
      background: url("../assets/image/roadmap/content.png")no-repeat;
      background-size: 100%;
    }

    .road-text-one {
      text-align: center;
      position: absolute;
      left: 18%;
      top: -40%;
      width: 16%;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 20px;
    }

    .road-text-two {
      width: 17%;
      position: absolute;
      left: 42%;
      top: -48%;
    }

    .road-text-three {
      width: 18%;
      position: absolute;
      left: 67%;
      top: -47%;
    }

    .road-text-four {
      position: absolute;
      left: 29%;
      top: 90%;
    }

    .road-text-five {
      width: 23%;
      position: absolute;
      left: 52%;
      top: 90%;
    }

    .road-part {
      padding-top: 200px;
      img {
        margin-top: 30px;
        width: 463px;
      }
    }

    .road-part-title {
      text-align: center;
      font-size: 20px;
      font-family: Helvetica;
      color: #FFFFFF;
    }






    @media (max-width: 1200px) {
      .road-container {
        width: 100%;
      }

      .road-text-one {
        width: 20%;
        left: 15%;
        top: -48%;
      }

      .road-text-two {
        left: 40%;
        top: -57%;
      }

      .road-text-three {
        width: 24%;
        left: 65%;
        top: -50%;
      }

      .road-text-four {
        top: 60%;
        left: 27%;
      }

      .road-text-five {
        width: 28%;
        top: 60%;
        left: 49%;
      }

      .road-bg {
        min-height: 50vh;
      }


    }

    @media (max-width: 960px) {

    }

    @media (max-width: 480px) {
      .road-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 0px;
        padding-top: 40px;
      }

      .road-container {
        padding-top: 60px;
        padding-bottom: 40px;
      }

      .road-title {
        font-size: 32px;
      }

    }


    </style>
