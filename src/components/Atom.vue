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
        padding-top: 12px;
        padding-bottom: 47px;
        img {
          width: 1140px;
        }
      }


      .atom-bottom {
        padding-bottom: 170px;
        padding-top: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 90%;
      }

      .bottom-info {
        width:32%;
        height: 538px;
        background: rgba(228, 78, 58, 0.37);
        border-radius: 27px;
        border: 1px solid #FF3014;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .bottom-info-icon {
        margin-top: 50px;
        width: 122px;
        //background: #E44E3A;
        //border-radius: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: 122px;
        }
      }

      .bottom-info-s {
        width: 474px;
      }

      .info-title {
        font-size: 29px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        padding-top: 28px;
        padding-bottom: 42px;
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
        color: #FFF391;
      }

      .content-right-twod {
        margin-top: 7px;
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
