      <template>
        <div class="my-header" id="homeId">
          <div class="container">
            <div class="logo">
              <img src="../assets/image/header/logo.png"/>
              <!--            <div class="logo-text">MAP Protocol</div>-->
            </div>
            <div class="nav-menu animated fadeIn">
              <div class="header-list">
                <div @click="actionHome" class="header-list-text">
                  <span :class="listtext==0?'header-list-text-color':''">{{ $t('header.Home') }}</span>
                  <div class="header-line" v-show="listtext==0"></div>
                </div>

<!--                <div @click="actionRelayer()" class="header-list-text">-->
<!--                  <span :class="listtext==7?'header-list-text-color':''">{{ $t('header.Relayer') }}</span>-->
<!--                  <div class="header-line" v-show="listtext==7"></div>-->
<!--                </div>-->
                <div @click="actionSolution()" class="header-list-text">
                  <span :class="listtext==1?'header-list-text-color':''">{{ $t('header.Solutions') }}</span>
                  <div class="header-line" v-show="listtext==1"></div>
                </div>
                <div @click="actionRoadMap()" class="header-list-text">
                  <span :class="listtext==2?'header-list-text-color':''">{{ $t('header.RoadMap') }}</span>
                  <div class="header-line" v-show="listtext==2"></div>
                </div>
                <div @click="actionGovernance()" class="header-list-text">
                  <span :class="listtext==3?'header-list-text-color':''"> Governance </span>
                  <div class="header-line" v-show="listtext==3"></div>
                </div>
                <div class="lang-layout" @mouseover="showDeve = true" @mouseout="showDeve = false">
                  <span class="lang-show" style="display: flex;flex-direction: row;align-items: center">Developes
                    <i :class="['icon-select', {'up': showDeve}]"></i>
                  </span>
                  <ul class="lang-list header-list-relay" v-show="showDeve">
                    <li @click="goDocs()">Docs</li>
                    <li @click="actionGitHub()">GitHub</li>
                    <li @click="actionWhitePaper()">WhitePaper</li>
                  </ul>
                </div>
                <div class="lang-layout" @mouseover="showMakalu = true" @mouseout="showMakalu = false">
                  <span class="lang-show" style="display: flex;flex-direction: row;align-items: center"><img style="width: 20px;margin-right: 5px" src="../assets/image/header/hot.png"/> Ecosystem <i :class="['icon-select', {'up': showMakalu}]"></i></span>
                  <ul class="lang-list header-list-relay" v-show="showMakalu">
                    <li @click="goEthereum()">Ethereum Relayer</li>
                    <li @click="goMaEx()">Makalu  Explorer</li>
                    <li @click="goHiveSwap()">HiveSwap </li>
                    <li @click="goBridge()">Bridge</li>
                    <li @click="actionWallet()">{{ $t('header.Wallet') }}</li>
                  </ul>
                </div>
<!--                <div @click="actionWallet()" class="header-list-text">-->
<!--                  <span :class="listtext==5?'header-list-text-color':''">{{ $t('header.Wallet') }}</span>-->
<!--                  <div class="header-line" v-show="listtext==5"></div>-->
<!--                </div>-->
                <div @click="actionJoin()" class="header-list-text">
                  <span :class="listtext==6?'header-list-text-color':''">{{ $t('header.JoinUs') }}</span>
                  <div class="header-line" v-show="listtext==6"></div>
                </div>
              </div>
            </div>
            <div class="lang-layout" @mouseover="selectLangVisible = true" @mouseout="selectLangVisible = false">
                        <span class="lang-show">{{ selectLang.name }}<i :class="['icon-select', {'up': selectLangVisible}]"></i></span>
                        <ul class="lang-list" v-show="selectLangVisible">
                          <li v-for="(item, i) in $t('header.langList')" :key="i" @click="changeLang(item)"
                              :class="{active: selectLang.tag === item.tag}">{{ item.name }}
                          </li>
                        </ul>
                      </div>
          </div>
        </div>
      </template>

      <script>
      import { setStore, getStore, setTitle } from '@/libs/util'

      export default {
        name: 'MyHeader.vue',
        data () {
          return {
            showDeve:false,
            showMakalu:false,
            listtext: 0,//选中
            activeNav: 'home',
            selectLangVisible: false, // 选择语言（默认不展示）
            selectLang: {
              name: '',
              subName: '',
              tag: ''
            }
          }
        },
        created () {
          let tag = getStore('marcoLang')
          if (tag === null) {
            tag = 'en'
            setStore('marcoLang', 'en')
          }
          let langList = this.$t('header.langList') || []
          let langVo = langList.filter(item => {
            return item.tag === tag
          })
          if (langVo && langVo.length > 0) {
            this.selectLang.name = langVo[0].name
            this.selectLang.subName = langVo[0].subName
            this.selectLang.tag = langVo[0].tag
          }
        },
        methods: {
          goDocs() {
            window.open('https://docs.maplabs.io','_blank')
          },
          goHiveSwap() {
            window.open('https://swap.hiveswap.io','_blank')
          },
          goMaEx() {
            window.open('https://makalu.mapscan.io/','blank')
          },
          goMakalu () {
            window.open('https://makalu-relayer.mapdapp.net/#/home','blank')
          },
          goEthereum () {
            window.open('https://relayer.mapdapp.net/#/home','blank')
          },
          goBridge() {
            window.open('https://bridge.maplabs.io/#/home','blank')
          },
          actionWallet () {
            window.open('https://www.maplabs.io/about', '_blank')
          },
          actionJoin () {
            var mos = function (e) {
              e.preventDefault()
            }
            document.body.style.overflow = ''//出现滚动条
            document.removeEventListener('touchmove', mos, false)
            document.querySelector(`#footerId`).scrollIntoView({
              top: 200,
              behavior: 'smooth', // 平滑过渡
              block: 'start' // 上边框与视窗顶部平齐。默认值
            })
          },
          actionHome () {
            this.listtext = 0
            window.location.href = '/'
          },
          actionRelayer() {
            this.listtext = 7
            window.open('https://relayer.mapdapp.net','_blank')
          },
          actionSolution () {
            this.listtext = 1
            var mos = function (e) {
              e.preventDefault()
            }
            document.body.style.overflow = ''//出现滚动条
            document.removeEventListener('touchmove', mos, false)
            document.querySelector(`#atomId`).scrollIntoView({
              top: 200,
              behavior: 'smooth', // 平滑过渡
              block: 'start' // 上边框与视窗顶部平齐。默认值
            })
          },
          actionGovernance() {
            window.open('https://dao.idavoll.network/project-detail/MAPProtocol','_blank')
          },
          actionRoadMap () {
            this.listtext = 2
            var mos = function (e) {
              e.preventDefault()
            }
            document.body.style.overflow = ''//出现滚动条
            document.removeEventListener('touchmove', mos, false)
            document.querySelector(`#roadMapId`).scrollIntoView({
              top: 200,
              behavior: 'smooth', // 平滑过渡
              block: 'start' // 上边框与视窗顶部平齐。默认值
            })
          },
          actionWhitePaper () {
            this.listtext = 3
            window.open('https://files.maplabs.io/pdf/mapprotocol_whitepaper_en.pdf', '_blank')
          },
          actionGitHub () {
            this.listtext = 4
            window.open('https://github.com/mapprotocol', '_blank')
          },

          changeNav (item, ins) {
            this.activeNav = item.key
            const { path } = item
            console.log(1)
            if (item.key === 'wallet') {
              let routeUrl = this.$router.resolve({
                path: '/about'
              })
              window.open(routeUrl.href, '_blank')
            } else {
              ins === 0 ? this.$router.go(0) : (path.includes('://') ? window.open(path) : document.querySelector(`#${item.path}`).scrollIntoView({
                behavior: 'smooth', // 平滑过渡
                block: 'start' // 上边框与视窗顶部平齐。默认值
              }))
              if (!path.includes('://')) {
                if (this.activeNav === 'why') {
                  document.querySelector('#nav_line').style.transform = 'translateX(158px) translateX(0)'
                } else if (this.activeNav === 'roadMap') {
                  document.querySelector('#nav_line').style.transform = 'translateX(280px) translateX(0)'
                } else if (this.activeNav === 'wallet') {
                  document.querySelector('#nav_line').style.transform = 'translateX(400px) translateX(0)'
                } else if (this.activeNav === 'white') {
                  document.querySelector('#nav_line').style.transform = 'translateX(520px) translateX(0)'
                } else if (this.activeNav === 'conTact') {
                  document.querySelector('#nav_line').style.transform = 'translateX(640px) translateX(0)'
                } else {
                  document.querySelector('#nav_line').style.transform = 'translateX(38px) translateX(0)'
                }
              }
            }
          },
          changeLang (item) {
            setStore('marcoLang', item.tag)
            this.$i18n.locale = item.tag
            this.selectLangVisible = false
            this.selectLang.name = item.name
            this.selectLang.subName = item.subName
            this.selectLang.tag = item.tag
          }
        }
      }
      </script>

      <style scoped lang="less">
      .my-header {
        width: 100%;
        padding: 40px 0 31px 0;
        background: #202020;
        position: relative;
        z-index: 888;

        .container {
          position: relative;
          width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          -webkit-justify-content: space-between;

          .logo {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 0 20px 0 0;

            img {
              margin-right: 20px;
              width: 211px;
            }
          }


          .logo-text {
            font-size: 16px;
            font-family: Helvetica;
            color: #FFFFFF;
          }


          .nav-menu {
            width: 60%;
            display: block;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .header-list {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            font-size: 14px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;

            .header-list-text {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              cursor: pointer;
              margin-left: 15px;

              span {
                line-height: 40px;
                height: 40px;
              }

              img {
                width: 35px;
                height: 6px;
              }
            }

            .header-line {
              width: 48px;
              height: 4px;
              background: #E54D39;
            }


            .header-list-text:hover {
              color: #E54D39;
            }

            .header-list-text-color {
              color: #E54D39;
            }

          }

          .nav_line {
            position: absolute;
            bottom: 0;
            width: 46px;
            height: 6px;
            background: black;
            transform: translateX(38px) translateX(0);
            transition-duration: 0.3s;
          }

          .menu {
            display: flex;
            padding-left: 200px;
            justify-content: flex-end;

            li {
              cursor: pointer;
              list-style-type: none;
              margin-top: 20px;
              width: 140px;
              text-align: center;
              word-break: break-all;

              a {
                display: inline-block;
                min-width: 46px;
                text-align: center;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                color: white;
                line-height: 20px;
                text-decoration: none;
              }

              a:hover {
                color: #E54D39;
                //font-size: 18px;
                font-weight: 800;
              }

              &:last-child {
                margin-right: 0;
                width: 180px;
                padding-right: 16px;
              }
            }
          }
        }

        .lang-layout {
          position: relative;
          text-align: right;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 15%;

          .icon-select {
            display: inline-block;
            vertical-align: middle;
            width: 12px;
            height: 12px;
            margin-left: 8px;
            background-image: url('../assets/image/header/select-top.png');
            transform: rotate(180deg);
            background-repeat: no-repeat;
            background-size: 100% 100%;

            &.up {
              transform: rotate(0);
              background-image: url('../assets/image/header/select-top.png');
            }
          }

          .lang-show {
            cursor: pointer;
            color: white;
            display: inline-block;
          }

          .lang-list {
            margin-top: 22px;
            position: absolute;
            //right: 0;
            width: 164px;
            background: #202020;
            border: 1px solid #202020;
            z-index: 999;

            li {
              width: 100%;
              cursor: pointer;
              text-align: center;
              margin: 0 0;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: white;
              line-height: 35px;

              &.active {
                background: #E44E3A;
                color: #ffffff;
              }
            }
          }

          .header-list-relay {
            li:hover {
              background: #E44E3A;
            }
          }
        }
      }
      </style>
