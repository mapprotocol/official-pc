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
                     <h1><img src="../assets/cross/title.png"/></h1>
                      <!--                      <span>The Ultimate Cross-chain Infrastructure</span>-->
<!--                      <span>Empowering the Future of Cross-chain Dapps</span>-->
<!--                      <span>Not one chain, not some chains, but connecting all chains</span>-->
                    </div>
                    <div class="cross-btn">
                      <a href="https://github.com/mapprotocol" target="_blank">GitHub</a>
                      <a href="https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf" target="_blank">Litebook</a>
<!--                      <a href="https://docs.maplabs.io/" target="_blank">Build</a>-->
                    </div>
                  </div>
                </div>
              </div>


<!--              map-->
              <div class="map">
                <div class="home-container">
                  <div class="map-content">
                    <img src="../assets/map/content.png"/>
                    <div class="map-right">
<!--                      one-->
                      <div class="map-right-content">
                        <div class="map-right-item">
                          <div class="map-item-top">
                            <img src="../assets/map/four.png" alt="Security-Finality"/>
                          </div>
                          <div class="map-item-text">
                            <span>Security-Finality</span>
                            <span>Guarantee blockchain-level security through an independent self-verification network formed by light clients on every public blockchain.</span>
                          </div></div>
                        <div class="map-right-item">
                          <div class="map-item-top">
                            <img src="../assets/map/two.png" alt="All-Chain Coverage"/>
                          </div>
                          <div class="map-item-text">
                            <span>All-Chain Coverage</span>
                            <span>Embed heterogeneous chains' signing and hashing algorithm into the EVM layer of the MAP Relay Chain to ensure seamless communication between all chains.</span></div>
                        </div>
                      </div>
<!--                      two-->
                      <div class="map-right-content">
                        <div class="map-right-item">
                          <div class="map-item-top">
                            <img src="../assets/map/one.png" alt="Instant Confirmation"/>

                          </div>
                          <div class="map-item-text">
                            <span>Instant Confirmation</span>
                            <span>Inter-chain communication programs and on-chain smart contracts work together efficiently to ensure that speed is only related to each chain's block time.</span></div>
                        </div>
                        <div class="map-right-item">
                          <div class="map-item-top">
                            <img src="../assets/map/three.png" alt="Minimum Cos"/>

                          </div>
                          <div class="map-item-text">
                            <span>Minimum Cost</span>
                            <span>MAP Protocol only charge the gas fee of MAP Relay Chain and other related chains with no additional cost.</span></div>
                        </div>
                      </div>
<!--                      three-->
                      <div class="map-right-content ">
                        <div class="map-right-item map-right-item-two">
                          <div class="map-item-top">
                            <img src="../assets/map/five.png" alt="Developer-Ready"/>
                          </div>
                          <div class="map-item-text">
                            <span>Developer-Ready</span>
                            <span>Through MAP Cross-Chain Service (MCS) deployed on and between public chains, dAPPs can share the liquidity of MCS's Vaults on different chains, and customize the entry threshold and incentive model of inter-chain program: messenger. Alternatively, we can use the MCS open source code to build dAPP-related Omnichain components.</span></div>
                        </div>
                      </div>

                     <!-- <div class="map-right-content map-right-content-h5">
                        <div class="map-right-item">
                          <img src="../assets/map/one.png" alt="Application-Ready"/>
                          <span>Application-Ready</span>
                        </div>
                        <div class="map-right-item">
                          <img src="../assets/map/two.png" alt="All-Chain Coverage"/>
                          <span>All-Chain Coverage</span>
                        </div>
                        <div class="map-right-item">
                          <img src="../assets/map/three.png" alt="Cost-Efficient"/>
                          <span>Cost-Efficient</span>
                        </div>
                      </div>
                      <div class="map-right-content map-right-content-h5">
                        <div class="map-right-item">
                          <img src="../assets/map/four.png" alt="Security-Finality"/>
                          <span>Security-Finality</span>
                        </div>
                        <div class="map-right-item">
                          <img src="../assets/map/five.png" alt="Instant Confirmation"/>
                          <span>Instant Confirmation</span>
                        </div>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>


<!--            Technical Structure-->
              <div class="technical">
                <div class="home-container">
                  <div class="technical-content">
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
                <div class="home-title"><h2>Ecosystem</h2></div>
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
                            <span>Build an omnichain ecosystem with MAP Protocol.</span>
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
                          <span>Provide liquidity to Vaults deployed on MAP omnichain network with rewards.</span>
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

<!--            Cross-chain Application-->
            <div class="chain">
              <div class="home-container">
                <div class="chain-content">
                  <div class="chain-top">
                    <div class="chain-top-title">
                      <span><h2>Omnichain Application</h2></span>
                      <span>
                         Developers can easily build their omnichain applications deployed on any chain in just two steps:<br>
                        <span class="text-blue">1.</span>Build inter-chain messenger<br>
                        <span class="text-blue">2.</span>Interact with on-chain vault and data through our SDK.
                      </span>
                    </div>
                    <img src="../assets/chain/img1.png"/>
                  </div>
                  <div @click="goApplication()" class="chain-img2">
                    <img src="../assets/chain/img2.png"/>
                  </div>
                  <div class="chain-bottom">
                    <div class="chain-bottom-img">
                      <button @click="goApplication()">Build</button>
                      <img src="../assets/chain/img3.png"/>
                    </div>
                    <!--<div class="chain-layer">
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
                            <span>dApps provide incentives for liquidity providers.</span>
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
                    </div> -->
                  </div>
                </div>
              </div>
            </div>


<!--            roadmap-->
            <div class="roadmap">
<!--              <div class="home-title"><h2>Roadmap</h2></div>-->
              <div class="home-container">
                <div class="roadmap-img">
                  <div class="roadmap-img-top">
                    <div class="roadmap-img-top-item">
                      <div  @click="goTokenInfo()" class="roadmap-img-top-text">
                        <span>Tokenomics</span>
                        <img src="../assets/roadmap/arrow-right.png"/>
                      </div>
                    </div>
                    <div class="roadmap-img-top-item roadmap-img-top-item-two">
                      <div  @click="goDaoGovernance()" class="roadmap-img-top-text">
                        <span >DAO Governance</span>
                        <img src="../assets/roadmap/arrow-right.png"/>
                      </div>
                    </div>
                  </div>
                  <div class="roadmap-img-bottom">
                    <div  @click="goRoadmap()" class="roadmap-img-top-text roadmap-img-top-text-two">
                      <span>Roadmap</span>
                      <img src="../assets/roadmap/arrow-right.png"/>
                    </div>
                  </div>
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
         goApplication() {
           window.open('https://docs.maplabs.io/learn/overiew/application','blank')
         },
          goRoadmap() {
            window.open('https://docs.maplabs.io/learn/roadmap','blank')
          },
          goTokenInfo() {
            window.open('https://docs.maplabs.io/learn/tokenomics','blank')
          },
          goDaoGovernance() {
            window.open('https://docs.maplabs.io/learn/dao','blank')
          },
          goDevelopers() {
            window.open('https://docs.maplabs.io/learn/construction/developers','blank')
          },
          goValidators() {
            window.open('https://docs.maplabs.io/learn/construction/validators','blank')
          },

          goMaintainers() {
            window.open('https://docs.maplabs.io/learn/construction/maintainer','blank')
          },
          goMessengers() {
            window.open('https://docs.maplabs.io/learn/construction/messengers','blank')
          },
          goLiquidityProviders() {
            window.open('https://docs.maplabs.io/learn/construction/liquidityprovider','blank')
          },
          goEndUsers() {
            window.open('https://docs.maplabs.io/learn/construction/enduser','blank')
          },



          goWhitepaper() {
            window.open('https://files.maplabs.io/pdf/mapprotocol_Litebook_en.pdf','blank')
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

        },
        beforeDestroy() {
        },
        mounted() {

        }
      }
      </script>

      <style scoped lang="less">
         @import "./newHome.less";
      </style>
