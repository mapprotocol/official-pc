      <template>
          <div class="atom" id="atomId">
            <div class="atom-container">
                  <div class="atom-banner">
                    <img src="../assets/image/atom/content.png"/>
                  </div>
                <div class="atom-bottom">
                  <div class="bottom-info">
                    <div class="bottom-info-icon">
                      <img src="../assets/image/atom/defi.png"/>
                    </div>
                    <div class="info-title">{{$t('Atom.info.one.title')}}</div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.one.a')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.one.b')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right content-right-one">
                        {{$t('Atom.info.one.c')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.one.d')}}
                      </div>
                    </div>
                  </div>
                  <div class="bottom-info">
                    <div class="bottom-info-icon">
                      <img src="../assets/image/atom/vault.png"/>
                    </div>
                    <div class="info-title">{{$t('Atom.info.two.title')}}</div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.two.a')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.two.b')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.two.c')}}
                      </div>
                    </div>
                    <div class="info-content content-right-twod">
                      <div class="content-left"></div>
                      <div class="content-right ">
                        {{$t('Atom.info.two.d')}}
                      </div>
                    </div>
                  </div>
                  <div class="bottom-info">
                    <div class="bottom-info-icon">
                      <img src="../assets/image/atom/map.png"/>
                    </div>
                    <div class="info-title">{{$t('Atom.info.three.title')}}</div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.three.a')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.three.b')}}
                      </div>
                    </div>
                    <div class="info-content">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.three.c')}}
                      </div>
                    </div>
                    <div class="info-content content-right-threed">
                      <div class="content-left"></div>
                      <div class="content-right">
                        {{$t('Atom.info.three.d')}}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </template>

      <script>
      export default {
      name: "Atom"
      }
      </script>

      <style scoped lang="less">

      .atom {
        position: relative;
        background: #252525;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .atom-container {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .atom-banner {
        padding-top: 52px;
        padding-bottom: 47px;
        img {
          width: 810px;
        }
      }


      .atom-bottom {
        padding-bottom: 67px;
        padding-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 95%;
      }

      .bottom-info {
        width:31%;
        height: 442px;
        background: rgba(228, 78, 58, 0.37);
        border-radius: 27px;
        border: 1px solid #FF3014;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bottom-info-icon {
        margin-top: 36px;
        width: 122px;
        //background: #E44E3A;
        //border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 80px;
        }
      }

      .bottom-info-s {
        width: 474px;
      }

      .info-title {
        font-size: 22px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        padding-top: 18px;
        padding-bottom: 21px;
        width: 90%;
        text-align: center;
      }

      .info-content {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 90%;
        padding-top: 10px;
      }

      .content-left {
        margin-top: 3px;
        width: 10px;
        height: 10px;
        background: #E44E3A;
        border-radius: 50%;
      }

      .content-right {
        margin-left: 10px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 17px;
        width: 100%;
      }

      .content-right-one {
        //color: black;
        //font-weight: 900;
      }

      .content-right-twod {
        margin-top: 12px;
      }

      .content-right-threed {
        margin-top: 8px;
      }

      .content-right-s {
        width: 80%;
      }


      @media (max-width: 1200px) {
        .atom-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .bottom-info {
          padding-bottom: 50px;
        }

        .atom-banner {
          width: 80%;
          img {
            width: 100%;
          }
        }

      }


      @media (max-width: 480px) {
        .atom-bottom {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }




      </style>
