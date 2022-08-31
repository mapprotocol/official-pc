<template>
  <div class="header">
    <div class="header-container">
      <!--                  logo-->
      <img @click="goHome()" class="header-logo" src="../assets/header/logo.png"/>

      <!--                  tab-->
      <div class="header-right">
        <div class="header-tab">
          <div class="header-tab-item">
            <div  class="header-item-top">
              <a href="https://mapscan.io" target="_blank"><span>Explorer</span></a>
            </div>
          </div>
          <div @mouseover="showHeaderTab=2" @mouseleave="showHeaderTab=-1" class="header-tab-item">
            <div  class="header-item-top">
              <span>Governance</span>
              <div class="header-item-arrow"></div>
            </div>
            <!--                     下拉框-->
            <div @mouseover="showHeaderTab=2" @mouseleave="showHeaderTab=-1"  v-show="showHeaderTab==2" class="header-item-drop header-drop-map">
              <div class="header-drop">
                <div @click="goForum()" class="header-drop-item header-drop-item-one">
                  <div class="header-relayer-icon header-forum-icon"></div>
                  <span>Forum</span>
                </div>
                <div @click="goDao()" class="header-drop-item">
                  <div class="header-relayer-icon header-dao-icon"></div>
                  <span>DAO</span>
                </div>
              </div>
            </div>
          </div>
          <div @mouseover="showHeaderTab=3" @mouseleave="showHeaderTab=-1" class="header-tab-item">
            <div  class="header-item-top">
              <span>Ecosystem</span>
              <div class="header-item-arrow"></div>
            </div>
            <!--                     下拉框-->
            <div @mouseover="showHeaderTab=3" @mouseleave="showHeaderTab=-1"  v-show="showHeaderTab==3" class="header-item-drop header-drop-map header-drop-map-h5">
              <div class="header-drop">
                <a href="https://bridge.maplabs.io/" target="_blank">
                  <div class="header-drop-item header-drop-item-bridge">
                      <div class="header-relayer-icon header-bridge-icon"></div>
                      <span>Bridge<span class="header-drop-beta" style="color: white">Beta</span></span>
                  </div>
                </a>
                <a href="https://swap.hiveswap.io" target="_blank">
                  <div @click="goHiveswapHome()" class="header-drop-item header-drop-item-one">
                    <div class="header-relayer-icon header-hiveswap-icon"></div>
                    <span>Hiveswap</span>
                  </div>
                </a>

              </div>
              <div class="header-drop">
                <a href="https://dao.idavoll.network/" target="_blank">
                  <div class="header-drop-item header-drop-item-dao">
                    <div class="header-relayer-icon header-idavoll-icon "></div>
                    <span>Idavoll DAO</span>
                  </div>
                </a>
                <a href="http://befiwallet.io/" target="_blank">
                  <div  class="header-drop-item ">
                  <div class="header-relayer-icon header-befi-icon"></div>
                  <span>BeFi Wallet</span>
                </div>
                </a>
              </div>
              <div class="header-drop">
                <a href="https://relayer.mapdapp.net/" target="_blank">
                  <div class="header-drop-item header-drop-item-one">
                    <div class="header-relayer-icon"></div>
                    <span>Messengers (Ethereum)</span>
                  </div>
                </a>
                <a href="https://makalu-relayer.mapdapp.net/" target="_blank">
                  <div class="header-drop-item">
                  <div class="header-relayer-icon"></div>
                  <span>Messengers (Makalu)</span>
                </div>
                </a>
              </div>
            </div>
          </div>
          <div @mouseover="showHeaderTab=4" @mouseleave="showHeaderTab=-1" class="header-tab-item">
            <div  class="header-item-top">
              <span>Developer</span>
              <div class="header-item-arrow"></div>
            </div>
            <!--                     下拉框-->
            <div @mouseover="showHeaderTab=4" @mouseleave="showHeaderTab=-1"  v-show="showHeaderTab==4" class="header-item-drop header-drop-map">
              <div class="header-drop">
                <div @click="goDocs()" class="header-drop-item header-drop-item-one">
                  <div class="header-relayer-icon header-docs-icon"></div>
                  <span>Docs</span>
                </div>
                <div @click="goGithub()" class="header-drop-item">
                  <div class="header-relayer-icon header-github-icon"></div>
                  <span>Github</span>
                </div>
              </div>
              <div class="header-drop">
                <div @click="goWhitepaper()" class="header-drop-item header-drop-item-brand">
                  <div class="header-relayer-icon header-white-icon"></div>
                  <span>Litebook</span>
                </div>
                <div @click="goBrand()" class="header-drop-item ">
                  <div class="header-relayer-icon header-brand-icon"></div>
                  <span>Brand Assets</span>
                </div>
              </div>
              <div class="header-drop">
                <div @click="goBlog()" class="header-drop-item header-drop-item-brand">
                  <div class="header-relayer-icon header-blog-icon"></div>
                  <span>Blog</span>
                </div>
              </div>
            </div>
          </div>
          <div class="header-tab-item">
            <div @click="goPurchase()" class="header-item-top">
              <span>Purchase</span>
            </div>
          </div>
          <div class="header-tab-item">
            <a href="https://docs.maplabs.io/" target="_blank"><button>Build Now</button></a>
          </div>
        </div>
        <div @click="actionTabs()" class="header-menu">
          <img src="../assets/header/menu.png"/>
        </div>
        <div v-show="showTab" class="header-tab-h5">
          <div class="header-tab_content">
            <div  @click="goHome()" class="header-tab-title">
              Home
            </div>

            <div class="header-line"></div>
            <div  @click="goMapscan()" class="header-tab-title">
              Explorer
            </div>

            <div class="header-line"></div>
            <div  @click="actionGovernance()" class="header-tab-title">
              Governance <img src="../assets/header/arrow-bottom-two.png"/>
            </div>
            <div v-show="showHeaderTab==2" class="header-tab-show">
              <div  class="header-line"></div>
              <div  @click="goForum()" class="header-tab-title">
                Forum
              </div>
              <div  class="header-line"></div>
              <div  @click="goDao()" class="header-tab-title">
                DAO
              </div>
            </div>

            <div class="header-line"></div>
            <div  @click="actionEcosystem()" class="header-tab-title">
              Ecosystem <img src="../assets/header/arrow-bottom-two.png"/>
            </div>
            <div v-show="showHeaderTab==3" class="header-tab-show">
              <div  class="header-line"></div>
              <div  @click="goBridge()" class="header-tab-title">
                Bridge
              </div>
              <div  class="header-line"></div>
              <div  @click="goHiveswapHome()" class="header-tab-title">
                Hiveswap
              </div>
              <div  class="header-line"></div>
              <div  @click="goIdavoll()" class="header-tab-title">
                Idavoll DAO
              </div>
              <div  class="header-line"></div>
              <div  @click="goBefi()" class="header-tab-title">
                BeFi Wallet
              </div>
              <div  class="header-line"></div>
              <div  @click="goRelayerEth()" class="header-tab-title">
                Messengers (Ethereum)
              </div>
              <div  class="header-line"></div>
              <div  @click="goRelayerMakalu()" class="header-tab-title">
                Messengers (Makalu)
              </div>
            </div>

            <div class="header-line"></div>
            <div  @click="actionDeveloper()" class="header-tab-title">
              Developer <img src="../assets/header/arrow-bottom-two.png"/>
            </div>
            <div v-show="showHeaderTab==4" class="header-tab-show">
              <div  class="header-line"></div>
              <div  @click="goDocs()" class="header-tab-title">
                Docs
              </div>
              <div  class="header-line"></div>
              <div  @click="goGithub()" class="header-tab-title">
                Github
              </div>
              <div  class="header-line"></div>
              <div  @click="goWhitepaper()" class="header-tab-title">
                Litebook
              </div>
              <div  class="header-line"></div>
              <div  @click="goBrand()" class="header-tab-title">
                Brand Assets
              </div>
              <div  class="header-line"></div>
              <div  @click="goBlog()" class="header-tab-title">
                Blog
              </div>
              <div  class="header-line"></div>
            </div>

            <div class="header-line"></div>
            <div  @click="goPurchase()" class="header-tab-title">
              Purchase
            </div>
            <div class="header-line"></div>
            <div  @click="goDocs()" class="header-tab-title">
              Build Now
            </div>
          </div>
        </div>
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

      showTab: false,//菜单栏
      showHeaderTab:-1 // header下拉框展示
    }
  },
  created () {

  },
  methods: {
    goBlog() {
      this.showTab=false
      window.open('https://www.maplabs.io/blog/','blank')
      this.actionDefault()
    },
    actionDeveloper() {
      if ( this.showHeaderTab!=4){
        this.showHeaderTab=4
      }
      else  if (this.showHeaderTab==4) {
        this.showHeaderTab=-1
      }
    },
    actionEcosystem() {
      if ( this.showHeaderTab!=3){
        this.showHeaderTab=3
      }
      else  if (this.showHeaderTab==3) {
        this.showHeaderTab=-1
      }
    },

    actionGovernance() {
      if ( this.showHeaderTab!=2){
        this.showHeaderTab=2
      }
      else  if (this.showHeaderTab==2) {
        this.showHeaderTab=-1
      }
    },
    actionTabs() {
      this.showTab = !this.showTab
      if (this.showTab) {
        var mo = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = 'hidden';
        document.addEventListener("touchmove", mo, false);//禁止页面滑动
      } else {
        var mos = function (e) {
          e.preventDefault();
        };
        document.body.style.overflow = '';//出现滚动条
        document.removeEventListener("touchmove", mos, false);
      }
    },
    actionDefault() {
      var mos = function (e) {
        e.preventDefault();
      };
      document.body.style.overflow = '';//出现滚动条
      document.removeEventListener("touchmove", mos, false);
    },
    goBrand() {
      this.showTab=false
      this.$router.push('/brand')
      this.actionDefault()
    },
    goHome() {
      this.showTab=false
      this.$router.push('/')
      this.actionDefault()
    },
    goPurchase() {
      this.$router.push('/purchase')
      this.actionDefault()
    },
    goRelayerEth() {
      this.showTab=false
      window.open('https://relayer.mapdapp.net/','blank')
      this.actionDefault()
    },
    goRelayerMakalu() {
      this.showTab=false
      window.open('https://makalu-relayer.mapdapp.net/','blank')
      this.actionDefault()
    },
    goVault() {
      this.$toast('Look Forward To')
    },
    goValidator() {
      this.$toast('Look Forward To')
    },
    goWhitepaper(){
      this.showTab=false
      window.open('https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf','blank')
      this.actionDefault()
    },
    goDefi() {
      this.showTab=false
      window.open('https://staking.maplabs.io/','blank')
      this.actionDefault()
    },
    goMapscan() {
      this.showTab=false
      window.open('https://mapscan.io','blank')
      this.actionDefault()
    },
    goForum() {
      this.showTab=false
      window.open('https://forum.maplabs.io/','blank')
      this.actionDefault()
    },
    goDao() {
      this.showTab=false
      window.open('https://newspace.idavoll.network/project-staking-detail/MAPProtocol','blank')
      this.actionDefault()
    },
    goHiveswap() {
      this.showTab=false
      window.open('https://swap.hiveswap.io/#/farms3','blank')
      this.actionDefault()
    },
    goHiveswapHome() {
      this.showTab=false
      window.open('https://swap.hiveswap.io','blank')
      this.actionDefault()
    },
    goIdavoll() {
      this.showTab=false
      window.open('https://dao.idavoll.network/','blank')
      this.actionDefault()
    },
    goBefi() {
      this.showTab=false
      window.open('http://befiwallet.io/','blank')
      this.actionDefault()
    },
    goDocs() {
      this.showTab=false
      window.open('https://docs.maplabs.io/','blank')
      this.actionDefault()
    },
    goGithub() {
      this.showTab=false
      window.open('https://github.com/mapprotocol','blank')
      this.actionDefault()
    },
    goScale() {
      this.showTab=false
      window.open('https://docs.maplabs.io/','blank')
      this.actionDefault()
    },
    goBridge() {
      this.showTab=false
      window.open('https://bridge.maplabs.io/','blank')
      this.actionDefault()
    }
  }
}
</script>

<style scoped lang="less">
@import "../views/newHome.less";
</style>
