      <template>
        <!--      news-->
        <div class="news">
          <div class="title new-title">{{$t('Roadmap.newsTitle')}}</div>
          <div class="title-line"></div>
          <div class="new-content">
            <div @mousemove="showMore=0" @mouseout="showMore=-1" @click="goNewOne" class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataOne.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataOne.title}}</span>
                <span>{{dataOne.time}}</span>
              </div>
              <div class="new-more new-more-one">
                <div>
                  <span v-if="showMore==0" style="color:#E44E3A">MORE</span>
                  <span v-else >MORE</span>
                </div>
                <img v-if="showMore==0" src="../assets/image/new/add.png"/>
                <img v-else src="../assets/image/new/add-white.png"/>
              </div>
            </div>
            <div @mousemove="showMore=1" @mouseout="showMore=-1" @click="goNewTwo" class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataTwo.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataTwo.title}}</span>
                <span>{{dataTwo.time}}</span>
              </div>
              <div class="new-more">
                <div>
                  <span v-if="showMore==1" style="color:#E44E3A">MORE</span>
                  <span v-else >MORE</span>
                </div>
                <img v-if="showMore==1" src="../assets/image/new/add.png"/>
                <img v-else src="../assets/image/new/add-white.png"/>
              </div>
            </div>
            <div @mousemove="showMore=2" @mouseout="showMore=-1" @click="goNewThree"  class="new-detail-s">
              <div :style="{ backgroundImage: 'url('+ dataThree.src +')'}" class="new-detail"></div>
              <div class="new-text">
                <span>{{dataThree.title}}</span>
                <span>{{dataThree.time}}</span>
              </div>
              <div class="new-more">
                <div>
                  <span v-if="showMore==2" style="color:#E44E3A">MORE</span>
                  <span v-else >MORE</span>
                </div>
                <img  v-if="showMore==2"  src="../assets/image/new/add.png"/>
                <img v-else src="../assets/image/new/add-white.png"/>
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

            console.log(result)
          }
        },
        mounted () {
          this.getNews()
        }
      }
      </script>

      <style scoped lang="less">

      img{
        vertical-align:top;
      }


      .news{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: url("../assets/image/new/bg.png")no-repeat;
        background-size: 100% 100%;

      }

      .new-title {
        padding-top: 119px;
      }


      .new-content {
        padding:79px 0 120px 0;
        width: 1200px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        //padding-top: 60px;
      }

      .new-detail-s {
        cursor: pointer;
        width: 332px;
      }


      .new-detail {
        width: 332px;
        height: 204px;
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
        height: 180px;
        box-sizing: border-box;
        font-size: 24px;
        font-weight: 700;
        color: #fff;
        span:nth-child(2) {
          font-size: 14px;
          opacity: 0.7;
          padding-top: 12px;
        }
      }

      .new-more {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-family: Poppins;
        font-size: 16px;
        font-weight: 500;
        color: white;
        img {
          margin-left: 10px;
          width: 16px;
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

        .new-detail {
          margin-top: 30px;
        }


        .new-detail-s {
          margin-top: 50px;
        }

      }


      </style>
