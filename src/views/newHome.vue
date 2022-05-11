      <template>
          <div class="home">
<!--            img-->
            <div class="home-img">
              <img src="../assets/home/img-header.png"/>
            </div>
            <div class="home-img-left">
              <img src="../assets/home/img-left.png"/>
            </div>
            <div class="home-img-right">
              <img src="../assets/home/img-right.png"/>
            </div>
              <!--            header-->
              <MyHeader/>

<!--            The Ultimate Cross-chain-->
              <div class="cross">
                <div class="home-container">
                  <div class="cross-content">
                    <div class="cross-title">
                      <img src="../assets/cross/title.png"/>
<!--                      <span>The Ultimate Cross-chain Infrastructure</span>-->
<!--                      <span>Empowering the Future of Cross-chain Dapps</span>-->
<!--                      <span>Not one chain, not some chains, but connecting all chains</span>-->
                    </div>
                    <div class="cross-btn">
                      <span @click="goGithub()">GitHub</span>
                      <span @click="goWhitepaper()">Litebook</span>
                      <span @click="goScale()">Build</span>
                    </div>
                  </div>
                </div>
              </div>


<!--              map-->
              <div class="map">
                <div class="home-container">
                  <div class="map-content">
                    <div class="map-title">
                      <span class="">The Blockchain Interoperable Protocol Designated for Cross-chain Dapps</span>
                    </div>
                    <div class="map-right">
                      <div class="map-right-content">
                        <div class="map-right-item">
                          <img src="../assets/map/one.png"/>
                          <span>Application-Ready</span>
                        </div>
                        <div class="map-right-item">
                          <img src="../assets/map/two.png"/>
                          <span>All-Chain Coverage</span>
                        </div>
                      </div>
                      <div class="map-right-content">
                        <div class="map-right-item">
                          <img src="../assets/map/three.png"/>
                          <span>Cost-Efficient</span>
                        </div>
                        <div class="map-right-item">
                          <img src="../assets/map/four.png"/>
                          <span>Security-Finality</span>
                        </div>
                      </div>
                    </div>
                    <div class="map-left">
                      MAP Protocol provides verification finality by Light-client, supports smart contract development on MAP Relay Chain,
                      offers cross-chain services components for Dapp's convenient deployment,
                      and enables universal connections with all chains by proactively embedding other chains' feature as pre-compiled contracts in EVM layer of MAP Relay Chain.
                      MAP Protocol maintains a cost-efficient network by simply charging MAP Relay Chain's gas fee for cross-chain transactions.
                    </div>
                  </div>
                </div>
              </div>


<!--            Technical Structure-->
              <div class="technical">
                <div class="home-container">
                  <div class="technical-content">
                      <div class="home-title">Technical Structure</div>
                      <div class="tech-text">
                        Developers can deploy cross-chain Dapps on MAP Relay Chain to achieve interoperability.
                      </div>
                      <div class="technical-img">
                        <img src="../assets/technnical/content.png"/>
                      </div>
                  </div>
                </div>
                <div class="technical-img-left">
                  <img src="../assets/technnical/img-left.png"/>
                </div>
                <div class="technical-img-right">
                    <img src="../assets/technnical/img-right.png"/>
                </div>
              </div>


<!--            Ecosystems-->
            <div class="eco">
              <div class="home-container">
                <div class="home-title">Ecosystem</div>
                <div class="eco-content">
                  <div class="eco-left">
                    <img src="../assets/eco/content.png"/>
                  </div>
                  <div class="eco-right">
                    <div class="eco-dev">
                      <div class="eco-dev-item">
                        <div @click="goDevelopers()"  class="eco-dev-item-cur">
                          <img src="../assets/eco/one.png"/>
                          <div class="eco-dev-item-title">
                            <span>Developers</span>
                            <span>Build a cross-chain ecosystem with MAP Protocol.</span>
                          </div>
                        </div>
                      </div>
                      <div  class="eco-dev-item">
                        <div @click="goValidators()" class="eco-dev-item-cur">
                          <img src="../assets/eco/two.png"/>
                          <div class="eco-dev-item-title">
                          <span>Validators</span>
                          <span>Help secure MAP Relay Chain and earn rewards.</span>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div class="eco-dev">
                      <div  class="eco-dev-item">
                        <div @click="goMaintainers()" class="eco-dev-item-cur">
                          <img src="../assets/eco/three.png"/>
                          <div class="eco-dev-item-title">
                          <span>Maintainers</span>
                          <span>Update Light-Clients on our connected chains and get incentives.</span>
                        </div>
                        </div>
                      </div>
                      <div  class="eco-dev-item">
                        <div @click="goMessengers()" class="eco-dev-item-cur">
                          <img src="../assets/eco/four.png"/>
                          <div class="eco-dev-item-title">
                          <span>Messengers</span>
                          <span>Listen and transmit events, build proof and prepay gas fees with additional rewards.</span>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div class="eco-dev">
                      <div  class="eco-dev-item">
                        <div @click="goLiquidityProviders()" class="eco-dev-item-cur">
                          <img src="../assets/eco/five.png"/>
                          <div class="eco-dev-item-title">
                          <span>Liquidity Providers</span>
                          <span>Provide liquidity to Vaults deployed on our connected chains with rewards.</span>
                        </div>
                        </div>
                      </div>
                      <div  class="eco-dev-item">
                        <div @click="goEndUsers()" class="eco-dev-item-cur">
                          <img src="../assets/eco/six.png"/>
                          <div class="eco-dev-item-title">
                          <span>End Users</span>
                          <span>Enjoy the safe,  fast and cost-effective cross-chain experience.</span>
                        </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <!--<div class="eco-text">
                  <img src="../assets/eco/img-round.png"/>
                  <span>MAP Protocol’s cross-chain ecosystem is booming. <br>
                    Join us on the journey to a decentralized Web3 with worldwide builders and users.</span>
                  <button @click="goScale()">Build</button>
                </div> -->
              </div>
              <div class="eco-img-right">
                <img src="../assets/eco/img-right.png"/>
              </div>
            </div>

<!--              compar-->
            <div class="technical compar">
              <div class="home-container">
                <div class="technical-content">
                  <div class="home-title">Other Cross-chain Solutions</div>
                  <div class="technical-img compar-img">
                    <img src="../assets/compar/content.png"/>
                  </div>
                </div>
              </div>
              <div class="compar-img-left">
                <img src="../assets/compar/img-left.png"/>
              </div>
            </div>


<!--            Cross-chain Application-->
            <div class="chain">
              <div class="home-container">
                <div class="chain-content">
                  <div class="chain-top">
                    <div class="chain-top-title">
                      <span>Cross-chain Application</span>
                      <span>Dapp developers can easily build their own cross-chain Dapps (e.g.half an hour for a cross-chain bridge) using MAP Cross-chain Service toolkits on the EVM-compatible MAP Relay Chain. Start embracing the Cross-chain Dapp Era today!</span>
                    </div>
                    <img src="../assets/chain/img1.png"/>
                  </div>
                  <div class="chain-img2">
                    <img src="../assets/chain/img2.png"/>
                  </div>
                  <div class="chain-bottom">
                    <div class="chain-bottom-img">
                      <button @click="goScale()">Build</button>
                      <img src="../assets/chain/img3.png"/>
                    </div>
                    <div class="chain-layer">
                        <div class="chain-layer-item">
                          <div class="chain-layer-title">Application Layer</div>
                          <div class="chain-layer-text">
                            <span></span>
                            <span>Assets and data are assembled on MAP Relay Chain.</span>
                          </div>
                          <div class="chain-layer-text">
                            <span></span>
                            <span>Interoperability is achieved because of MCS.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>The finality of verification network is conducted on MAP Protocol Layer.</span>
                          </div>
                        </div>
                        <div class="chain-layer-item">
                          <div class="chain-layer-title">Cross-chain Services (MCS) Layer</div>
                          <div class="chain-layer-text">
                            <span></span>
                            <span>The execution layer for cross-chain asset and data.</span>
                          </div>
                          <div class="chain-layer-text">
                            <span></span>
                            <span>Similar to Google Mobile Services.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Dapp developers can build their components or use MCS.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Consists of Vaults and Data deployed on each chain, and Messenger Program to transmit messages between chains.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Developers can share Vaults and Data liquidity with others.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Messenger Program is an SDK deployed, operated, incentivized and maintained by Dapp developers.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Dapps provide incentives for liquidity providers.</span>
                          </div>
                        </div>
                        <div class="chain-layer-item">
                        <div class="chain-layer-title">Protocol Layer</div>
                        <div class="chain-layer-text chain-layer-text-s">
                          <span></span>
                          <span>The layer to conduct the cross-chain verification network and Dapp deployment.</span>
                        </div>
                        <div class="chain-layer-text chain-layer-text-s">
                          <span></span>
                          <span> Consists of MAP Relay Chain, Light-Client deployed on each chain, and inter-chain Maintainer Program.</span>
                        </div>
                        <div class="chain-layer-text chain-layer-text-s">
                          <span></span>
                          <span>MAP Relay Chain proactively extends and supports heterogeneous blockchains' features in virtual machine.</span>
                        </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>Light-Client deployed on each chain has the characteristics of independent self-verification and verification finality.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>The Maintainer is an independent inter-chain program responsible for updating the status of Light Clients.</span>
                          </div>
                          <div class="chain-layer-text chain-layer-text-s">
                            <span></span>
                            <span>MAP Protocol provides incentives to validators on MAP Relay Chain and Maintainers for updating Light-Client status.</span>
                          </div>
                      </div>
                    </div>
                  </div>
                  <div class="chain-btn">
                    <button @click="goTokenInfo()">Token Info</button>
                    <button @click="goDaoGovernance()">DAO Governance</button>
                  </div>
                </div>
              </div>
            </div>


<!--            roadmap-->
            <div class="roadmap">
              <div class="home-title">Roadmap</div>
              <div class="home-container">
                <div class="roadmap-img">
                  <img src="../assets/roadmap/content.png"/>
                </div>
              </div>
              <div class="roadmap-left">
                <img src="../assets/roadmap/img-left.png"/>
              </div>
            </div>



              <Partner/>

            <div class="new-bg">
              <New/>
              <div class="new-img-right">
                <img src="../assets/map/img-right.png"/>
              </div>
            </div>


              <Footer/>


          </div>
      </template>

      <script>
      import countTo from 'vue-count-to';
      import New from "@/components/New";
      import Partner from "@/components/Partner";
      import Footer  from "@/components/Footer";
      import Axios from 'axios'
      import Decimal from 'decimal.js'
      import relayAbi from '../config/relayData.json'
      import MyHeader from '../components/MyHeader'
      export default {
      name: "newHome",
        components: {
          MyHeader,
          Footer,
          Partner,
          New,
          countTo
      },
        data() {
          return {
            timeData:null,
            showNum:true,//显示数
            startVal: 0,
            crossChain: 0,
            vault:'--',
            totalAddress:0,
            relayer:0,
            showMapLine:-1,//mapnnum线
            showHeaderTab:-1 // header下拉框展示
          }
        },
        methods: {
          goTokenInfo() {
            window.open('https://docs.maplabs.io/learn/tokenomics','blank')
          },
          goDaoGovernance() {
            window.open('https://docs.maplabs.io/learn/dao','blank')
          },
          goDevelopers() {
            window.open('https://docs.maplabs.io/develop','blank')
          },
          goValidators() {
            window.open('https://docs.maplabs.io/run/howtobecomeanewvalidator','blank')
          },

          goMaintainers() {
            window.open('https://docs.maplabs.io/learn/overiew/protocollayer/verification','blank')
          },
          goMessengers() {
            window.open('https://docs.maplabs.io/learn/overiew/mcs#messenger','blank')
          },
          goLiquidityProviders() {
            window.open('https://docs.maplabs.io/learn/overiew/mcs','blank')
          },
          goEndUsers() {
            window.open('https://docs.maplabs.io/learn/overiew','blank')
          },



          goWhitepaper() {
            window.open('https://files.maplabs.io/pdf/mapprotocol_whitepaper_en.pdf','blank')
          },
          goMapscan() {
            window.open('https://makalu.mapscan.io/','blank')
          },
          goGithub() {
            window.open('https://github.com/mapprotocol','blank')
          },
          goScale() {
            window.open('https://docs.maplabs.io/','blank')
          },
          goBridge() {
            window.open('https://bridge.maplabs.io/','blank')
          },
          goHiveswap() {
            window.open('https://swap.hiveswap.io/#/farms3','blank')
          },
          goRelayerMakalu() {
            window.open('https://makalu-relayer.mapdapp.net/','blank')
          },
          goValidator() {
            this.$toast('Look Forward To')
          },

          async actionSetTimeData() {
          this.timeData = setInterval(()=> {
              this.actionTotalAddress()
            },30000)
          },

         async actionTotalAddress() {
           let v = this
           let result = await Axios.get('https://makalu-api.mapscan.io/scan/queryData')
           if (result.data.code==200) {
             let data = result.data.data
             v.crossChain = parseFloat(data.allCrossCount)
             v.totalAddress = parseFloat(data.totalAddress)
             v.relayer = parseFloat(data.addressCount)-3600
           }
          },



        },
        beforeDestroy() {
          this.timeData = null
          clearInterval(this.timeData)
        },
        mounted() {

          this.timeData = null
          clearInterval(this.timeData)
          this.actionTotalAddress()
          this.actionSetTimeData()
          // window.onscroll = function() {
          //   //为了保证兼容性，这里取两个值，哪个有值取哪一个
          //   //scrollTop就是触发滚轮事件时滚轮的高度
          //   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          //   console.log("滚动距离" + scrollTop);
          //   if (scrollTop>500) {
          //     v.showNum = true
          //     v.actionTotalAddress()
          //   }
          // }

        }
      }
      </script>

      <style scoped lang="less">
         @import "./newHome.less";
      </style>
