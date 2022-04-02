      <template>
        <div class="header">
          <div class="header-container">
            <!--                  logo-->
            <img @click="goHome()" class="header-logo" src="../assets/header/logo-two.png"/>

            <!--                  tab-->
            <div class="header-right">
              <div class="header-tab">
                <div @mouseover="showHeaderTab=0" @mouseleave="showHeaderTab=-1" class="header-tab-item">
                  <div  class="header-item-top">
                    <span>Participate</span>
                    <div class="header-item-arrow"></div>
                  </div>
                  <!--                     下拉框-->
                  <div @mouseover="showHeaderTab=0" @mouseleave="showHeaderTab=-1"  v-show="showHeaderTab==0" class="header-item-drop">
                    <div class="header-drop">
                      <div @click="goRelayerEth()" class="header-drop-item header-drop-item-one">
                        <div class="header-relayer-icon"></div>
                        <span>Relayer (Ethereum)</span>
                      </div>
                      <div  @click="goRelayerMakalu()" class="header-drop-item">
                        <div class="header-relayer-icon"></div>
                        <span>Relayer (Makalu)</span>
                      </div>
                    </div>
                    <div class="header-drop">
                      <div  @click="goVault()" class="header-drop-item header-drop-item-one header-drop-item-vault">
                        <div class="header-relayer-icon header-vault-icon"></div>
                        <span>Vault</span>
                      </div>
                      <div @click="goValidator()" class="header-drop-item header-drop-item-three">
                        <div class="header-relayer-icon header-validator-icon"></div>
                        <span>Validator</span>
                      </div>
                    </div>
                    <div class="header-drop">
                      <div @click="goHiveswap()" class="header-drop-item">
                        <div class="header-relayer-icon header-defi-icon"></div>
                        <span>DeFi</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div @click="goMapscan()" class="header-tab-item">
                  <div  class="header-item-top">
                    <span>Explorer</span>
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
                  <div @mouseover="showHeaderTab=3" @mouseleave="showHeaderTab=-1"  v-show="showHeaderTab==3" class="header-item-drop header-drop-map">
                    <div class="header-drop">
                      <div @click="goBridge()" class="header-drop-item header-drop-item-bridge">
                        <div class="header-relayer-icon header-bridge-icon"></div>
                        <span>Bridge<span class="header-drop-beta" style="color: white">Beta</span></span>
                      </div>
                      <div @click="goHiveswapHome()" class="header-drop-item header-drop-item-one">
                        <div class="header-relayer-icon header-hiveswap-icon"></div>
                        <span>Hiveswap</span>
                      </div>

                    </div>
                    <div class="header-drop">
                      <div @click="goIdavoll()" class="header-drop-item header-drop-item-dao">
                        <div class="header-relayer-icon header-idavoll-icon "></div>
                        <span>Idavoll DAO</span>
                      </div>
                      <div @click="goBefi()"  class="header-drop-item ">
                        <div class="header-relayer-icon header-befi-icon"></div>
                        <span>BeFi Wallet</span>
                      </div>
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
                      <div @click="goWhitepaper()" class="header-drop-item header-drop-item-one">
                        <div class="header-relayer-icon header-white-icon"></div>
                        <span>Whitepaper</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="header-tab-item">
                  <div @click="goPurchase()" class="header-item-top">
                    <span>Purchase</span>
                  </div>
                </div>
              </div>
<!--              <div @click="goBridge()" class="header-launch">Launch App</div>-->
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
            showHeaderTab:-1 // header下拉框展示
          }
        },
        created () {

        },
        methods: {
          goHome() {
            this.$router.push('/')
          },
          goPurchase() {
            this.$router.push('/purchase')
          },
          goRelayerEth() {
            window.open('https://relayer.mapdapp.net/','blank')
          },
          goRelayerMakalu() {
            window.open('https://makalu-relayer.mapdapp.net/','blank')
          },
          goVault() {
            this.$toast('Look Forward To')
          },
          goValidator() {
            this.$toast('Look Forward To')
          },
          goWhitepaper(){
            window.open('https://files.maplabs.io/pdf/mapprotocol_whitepaper_en.pdf','blank')
          },
          goDefi() {
            window.open('https://staking.maplabs.io/','blank')
          },
          goMapscan() {
            window.open('https://makalu.mapscan.io/','blank')
          },
          goForum() {
            window.open('https://forum.maplabs.io/','blank')
          },
          goDao() {
            window.open('https://newspace.idavoll.network/project-staking-detail/MAPProtocol','blank')
          },
          goHiveswap() {
            window.open('https://swap.hiveswap.io/#/farms3','blank')
          },
          goHiveswapHome() {
            window.open('https://swap.hiveswap.io','blank')
          },
          goIdavoll() {
            window.open('https://dao.idavoll.network/','blank')
          },
          goBefi() {
            window.open('https://befiwalletdao.com/#/','blank')
          },
          goDocs() {
            window.open('https://docs.maplabs.io/','blank')
          },
          goGithub() {
            window.open('https://github.com/mapprotocol','blank')
          },
          goScale() {
            window.open('https://docs.maplabs.io/','blank')
          },
          goBridge() {
            window.open('https://bridge.maplabs.io/','blank')
          }
        }
      }
      </script>

      <style scoped lang="less">
      @import "../views/newHome.less";
      </style>
