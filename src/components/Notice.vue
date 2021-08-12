    <style scoped lang="less">
    .notice {
      position: relative;
      height: 100%;
      width: 100%;
      background: #252525;
      //background: linear-gradient(0deg, #341C17 0%, rgba(0, 0, 0, 0.9) 100%);
      color: white;
    }

    .notice-bg {
      height: 100%;
      width: 100%;
      background-image: url('../assets/image/notice/bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }

    .notice-container {
      width: 1200px;
      margin: 0 auto;
      padding-top: 70px;
      padding-bottom: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .notice-img {
      margin-top: 34px;
      img {
        width:100%;
      }
    }


    //下半部分

    .notice-content {
      width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 30px;
      flex-wrap: wrap;
    }

    .notice-bottom-title {
      //margin-top: 20px;
      font-size: 30px;
      font-family: NexaBold;
      color: #E44E3A;
    }


    .notice-text {
      padding-top: 55px;
      padding-bottom: 131px;
      width: 100%;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 39px;;
      text-align: left;
      //text-indent: 36px;
    }

    .notice-btn {
      padding-top: 61px;
      width: 39%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .notice-github {
      cursor: pointer;
      font-size: 22px;
      background: linear-gradient(180deg, #341C17 0%, rgba(0, 0, 0, 0) 100%);
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 53px;
      width: 209px;
      height: 53px;
      border-radius: 6px;
      border: 2px solid #E44E3A;
    }

    .notice-white {
      cursor: pointer;
      width: 209px;
      height: 53px;
      background: #E44E3A;
      border-radius: 6px;
      font-size: 22px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
    }

    .notice-title {
      font-size: 39px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      span {
        font-weight: bold;
      }
    }



    .notice-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .notice-title-img {
      img {
        width: 300px;
      }
    }

    .notcie-bottom {
      //border-radius: 30% 40% 0 0%;
      background: #252525;
      display: flex;
      flex-direction: column;
      align-items: center;
    }


    @media (max-width: 1200px) {
      .notice-container {
        width: 100%;
      }
      .notice-content {
        width: 100%;
      }

      .notice-btn {
        width: 60%;
      }
      .notice-text {
        width: 90%;
      }
    }

    @media (max-width: 480px) {
      .notice-container {
        padding-top: 60px;
        padding-bottom: 60px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      }
      .notice-text-br {
        display: none;
      }

      .notice-btn {
        width: 60%;
      }

      .notice-text {
        width: 90%;
      }

      .notice-content {
        text-align: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 30px;
        flex-wrap: wrap;
        justify-content: center;
      }
      .notice-title {
        width: 100%;
      }

      .notice-img {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 90%;
        }
      }
    }
    </style>
    <template>
      <div class="notice" id="notice">
        <div class="notice-bg">
            <div class="notice-container">
              <div class="notice-info">
<!--                <div class="notice-title-img">-->
<!--                  <img src="../assets/image/notice/text.png"/>-->
<!--                </div>-->
                <div class="notice-title">
                  <span>{{ $t('Notice.title') }}</span>
                </div>
                <div class="notice-img">
                  <img src="../assets/image/notice/banner4.gif"/>
                </div>
        <!--        按钮-->
                <div class="notice-btn">
                  <button class="notice-github" @click="goGithub()">GitHub</button>
                  <button class="notice-white"  @click="actionWhitepaper()">White Paper</button>
                </div>
              </div>
            </div>
        </div>
        <div class="notcie-bottom">
          <div class="notice-content">
            <div class="notice-bottom-title">
              {{$t('Notice.head')}}
            </div>
            <div class="notice-text">
              {{$t('Notice.info')}}
            </div>
          </div>
        </div>
      </div>
    </template>

    <script>
    export default {
      name: 'Protocol.vue',
      data() {
        return {
          flag: true,
          interTimer: null,
          min: 1,
          sec: 1,
          day: 1,
          hr: 1
        }
      },
      methods: {
        goGithub() {
          window.open('https://github.com/mapprotocol','_blank')
        },
        actionWhitepaper(){

          window.open('https://files.maplabs.io/pdf/mapprotocol_whitepaper_en.pdf','_blank');
          // location.href=''
        },
        //倒计时
        countdown() {
          const end = Date.parse(new Date('2020-09-30 18:00:00'))
          const now = Date.parse(new Date())
          const msec = end - now
          // console.log(msec)
          if (msec < 0) return;
          // 将时间戳进行格式化00：00的形式
          let day = parseInt(msec / 1000 / 60 / 60 / 24)
          let hr = parseInt(msec / 1000 / 60 / 60 % 24)
          let min = parseInt(msec / 1000 / 60 % 60)
          let sec = parseInt(msec / 1000 % 60)
          this.day = day
          this.hr = hr > 9 ? hr : '0' + hr
          this.min = min > 9 ? min : '0' + min
          this.sec = sec > 9 ? sec : '0' + sec
          const that = this
          if (day >= 0 && hr >= 0 && min >= 0 && sec >= 0) {
            //倒计时结束关闭订单
            if (day == 0 && hr == 0 && min == 0 && sec == 0) {
              return
            }
            //一秒更新一次
            setTimeout(function () {
              that.countdown()
            }, 1000)
          }
        },
        //图片滚动
      },
      mounted() {
        // this.countdown()
      },
      destroyed() {
      },
      created() {
        // window.addEventListener("scroll",this.scrollHandle)
      }
    }
    </script>
