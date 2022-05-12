      <template>
        <!--      news-->
        <div class="news">
          <div class="home-title">MAP Protocol in the media</div>
          <div class="new-content">
            <div @mousemove="showMore=0" @mouseout="showMore=-1" @click="goNewOne" class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataOne.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataOne.title}}</span>
<!--                <span>{{dataOne.time}}</span>-->
              </div>
            </div>
            <div @mousemove="showMore=1" @mouseout="showMore=-1" @click="goNewTwo" class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataTwo.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataTwo.title}}</span>
<!--                <span>{{dataTwo.time}}</span>-->
              </div>
            </div>
            <div @mousemove="showMore=2" @mouseout="showMore=-1" @click="goNewThree"  class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataThree.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataThree.title}}</span>
<!--                <span>{{dataThree.time}}</span>-->
              </div>
            </div>
          </div>
        </div>
      </template>

      <script>
      import moment from 'moment'

      export default {
      name: "New",
        data() {
          return {
            showMore:-1,
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
        methods :{
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

            // console.log(result)
          }
        },
        mounted () {
          this.getNews()
        }
      }
      </script>

      <style scoped lang="less">
      @import "../views/newHome.less";

      img{
        vertical-align:top;
      }


      .news{
        position: relative;
        z-index: 10;
        padding: 0 0 102px 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }


      .new-title {
        padding-top: 119px;
      }


      .new-content {
       padding-top: 50px;
        width: 1000px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        //padding-top: 60px;
      }

      .new-detail-s {
        cursor: pointer;
        width: 288px;
      }


      .new-detail {
        width: 288px;
        height: 161px;
        border-radius: 15px;
        background-position:center top;
        background-size: cover;
      }

      .new-text {
        padding-top: 23px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 100%;
        height: 140px;
        box-sizing: border-box;
        font-size: 18px;
        span:nth-child(1) {
          font-weight: bold;
          height: 70px;
        }
        span:nth-child(2) {
          padding-top: 15px;
          opacity: 0.3;
          font-size: 12px;
          color: rgb(0, 0, 0);
        }
      }

      .new-more {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 14px;
        font-weight: bold;
        img:nth-child(2) {
          margin-left: 10px;
          width: 17px;
        }
      }

      .new-more-one{
        //padding-top: 75px;
      }

      @media (max-width: 1200px) {

        .new-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }


      }

      @media (max-width: 960px) {
        .new-content {
          padding-top: 30px;
        }
        .new-detail {
          margin-top: 30px;
        }
        .new-detail-s {
          margin-top: 10px;
        }

        .news {
          padding-bottom: 50px;
        }
      }


      </style>
