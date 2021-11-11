    <template>
      <div class="road" id="roadMapId" v-animate-onscroll.repeat="{down: 'animated'}">
        <div class="road-bg"></div>
        <div class="road-container">
          <!--      title-->
          <div class="title">{{ $t('Roadmap.title') }}</div>
          <div class="title-line"></div>

          <div class="road-img">
            <div class="road-text">
              <div class="road-text-one">
                {{ $t('Roadmap.one.a') }}<br>
                {{ $t('Roadmap.one.b') }}<br>
                {{ $t('Roadmap.one.c') }}<br>
              </div>
              <div class="road-text-one road-text-two">
                {{ $t('Roadmap.three.a') }}<br>
                {{ $t('Roadmap.three.b') }}
              </div>
              <div class="road-text-one road-text-three">
                {{ $t('Roadmap.five.a') }}<br/>
                {{ $t('Roadmap.five.b') }}
              </div>
              <div class="road-text-one road-text-four">
                {{ $t('Roadmap.two.a') }}<br/>
                {{ $t('Roadmap.two.b') }}
              </div>
              <div class="road-text-one road-text-five">
                {{ $t('Roadmap.four.a') }}<br/>
                {{ $t('Roadmap.four.b') }}
              </div>
            </div>
          </div>
        </div>



<!--        <div class="road-part">-->
<!--          <div class="road-part-title">{{ $t('Roadmap.part') }}</div>-->
<!--          <img src="../assets/image/roadmap/logo.png"/>-->
<!--        </div>-->

      </div>
    </template>


    <script>

    import moment from 'moment';

    export default {
      name: 'RoadMap',
      data () {
        return {
          flag: true,
          interTimer: null,
          dataOne:{
            src:'',
            time:''
          },
          dataTwo:{
            src:'',
            time:''
          },
          dataThree:{
            src:'',
            time:''
          }
        }
      },
      methods: {
        goNewOne() {
          window.open(this.dataOne.source_url,'_blank')
        },
        goNewTwo() {
          window.open(this.dataTwo.source_url,'_blank')
        },
        goNewThree() {
          window.open(this.dataThree.source_url,'_blank')
        },
        async getNews() {
           let params= {
             page:0,
             offset:20,
             pID:'5ea00c14fff63ee1bf8e4dca',
             lang:'ko'
           }
           var result =await this.$http.getNews(params)
          this.dataOne=result[0]
          this.dataOne.src=this.dataOne.thumbnail_image_url
          this.dataOne.time=moment.utc(this.dataOne.updated_timestamp).local().format('YYYY-MM-DD HH:mm')

          this.dataTwo=result[1]
          this.dataTwo.src=this.dataTwo.thumbnail_image_url
          this.dataTwo.time=moment.utc(this.dataTwo.updated_timestamp).local().format('YYYY-MM-DD HH:mm')

          this.dataThree=result[2]
          this.dataThree.src=this.dataThree.thumbnail_image_url
          this.dataThree.time=moment.utc(this.dataThree.updated_timestamp).local().format('YYYY-MM-DD HH:mm')

           console.log(result)
        }
      },
      mounted () {
        this.getNews()
        let that = this
        this.interTimer = setInterval(function () {
          let subCoreDom = document.querySelector('#roadMapId')
          if (subCoreDom) {
            let classStr = subCoreDom.classList.toString() || ''
            that.flag = classStr.includes('animated')
          }
        }, 500)
      },
      destroyed () {
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
      justify-content: center;
      margin: 0 auto;
      padding-top: 101px;
      padding-bottom: 221px;
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
      background-image: radial-gradient(50% 50% at 50% 50%, #e44e3a29 0, transparent);
      background-position: 0px -30vh;
      background-repeat: no-repeat;
    }

    //

    .title {
      text-align: center;
    }


    .title-line {
      margin-bottom: 50px;
    }

    .road-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding-top: 110px;

      img {
        width: 100%;
      }
    }

    .road-text {
      position: relative;
      max-width: 1600px;
      width: 100%;
      height: 220px;
      background: url("../assets/image/roadmap/content.png") no-repeat;
      background-size: 100%;
    }

    .road-text-one {
      text-align: left;
      position: absolute;
      left: 20%;
      top: -90px;
      width: 18%;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 20px;
      max-width: 350px;
    }

    .road-text-two {
      width: 16%;
      position: absolute;
      left: 45%;
      top: -102px;
    }

    .road-text-three {
      position: absolute;
      left: 70%;
      top: -104px;
      //top: -47%;
    }

    .road-text-four {
      position: absolute;
      left: 28%;
      width: 25%;
      top: 200px;
    }

    .road-text-five {
      width: 23%;
      position: absolute;
      left: 57%;
      top: 200px;
      max-width: 350px;
    }

    .road-part {
      padding-top: 130px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 130px;
      img {
        margin-top: 52px;
        width: 339px;
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
        top: -110px;
      }

      .road-text-two {
        left: 40%;
        top: -127px;
      }

      .road-text-three {
        width: 24%;
        left: 65%;
        top: -110px;
      }

      .road-text-four {
        top: 135px;
        left: 27%;
      }

      .road-text-five {
        width: 28%;
        top: 135px;
        left: 49%;
      }

      .road-bg {
        min-height: 50vh;
      }

      .new-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .new-detail {
        margin-top: 30px;
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

      .new-content {

      }

    }


    </style>
