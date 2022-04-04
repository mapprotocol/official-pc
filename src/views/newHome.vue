      <template>
          <div class="home">

            <div class="home-bg">
              <!--            header-->
              <MyHeader/>
              <!--            forge-->
              <div class="forge">
                <div class="home-container">
                  <div class="forge-content">
<!--                    <div class="forge-title">MAP Protocol</div>-->
                    <div class="forge-text">Forge a Borderless Blockchain-verse</div>
                    <div class="forge-lable">MAP Protocol is a decentralized cross-chain interoperability protocol backed by a dedicated blockchain which safeguards cross-chain assets and empowers Dapps to achieve full potential.</div>
                    <div class="forge-btn">
                      <div @click="goGithub()" class="forge-btn-black">GitHub</div>
                      <div @click="goWhitepaper()" class="forge-btn-black">Whitepaper</div>
                      <div @click="goScale()" class="forge-btn-black">Build</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


<!--            map-->
            <!--  <div class="map">
                 <div class="home-container">
                   <div class="map-content">
                    <div class="map-content-top">
                       <div class="map-title">
                         <span>MAP Protocol</span>
                         <span>MAP Protocol is a decentralized cross-chain interoperability protocol backed by a dedicated blockchain which safeguards cross-chain assets and empowers Dapps to achieve full potential.</span>
                       </div>
                       <div class="">
                         <img src="../assets/map/video.png"/>
                       </div>
                     </div>
                     <div class="map-num">
                         <div @click="goMapscan()" @mouseover="showMapLine=0" @mouseleave="showMapLine=-1" class="map-num-item">
                             <div class="map-num-item-top">
                               <span>Total Cross-Chain Trading Volume</span>
                               <img src="../assets/map/arrow-bottom-orange.png"/>
                             </div>
                             <div class="map-num-item-bottom">
                               <countTo :startVal='startVal' :endVal='crossChain' :duration='3000' :autoplay="showNum"></countTo>
                             </div>
                             <div v-show="showMapLine==0" class="map-num-line"></div>
                         </div>
                         <div @mouseover="showMapLine=1" @mouseleave="showMapLine=-1"  class="map-num-item">
                         <div class="map-num-item-top">
                           <span>Total Value Locked</span>
                           <img src="../assets/map/arrow-bottom-orange.png"/>
                         </div>
                         <div class="map-num-item-bottom">
                           <span>--</span>
                           <countTo :startVal='startVal' :endVal='vault' :duration='3000' :autoplay="showNum"></countTo>
                         </div>
                           <div v-show="showMapLine==1" class="map-num-line"></div>
                       </div>
                         <div @click="goMapscan()" @mouseover="showMapLine=2" @mouseleave="showMapLine=-1"  class="map-num-item">
                           <div class="map-num-item-top">
                             <span>Total Addresses</span>
                             <img src="../assets/map/arrow-bottom-orange.png"/>
                           </div>
                           <div class="map-num-item-bottom">
                             <countTo :startVal='startVal' :endVal='totalAddress' :duration='3000' :autoplay="showNum"></countTo>
                           </div>
                           <div v-show="showMapLine==2" class="map-num-line"></div>
                         </div>
                         <div @click="goRelayerMakalu()" @mouseover="showMapLine=3" @mouseleave="showMapLine=-1"  class="map-num-item">
                         <div class="map-num-item-top">
                           <span>Ralayer Nodes</span>
                           <img src="../assets/map/arrow-bottom-orange.png"/>
                         </div>
                         <div class="map-num-item-bottom">
                           <countTo :startVal='startVal' :endVal='relayer' :duration='3000' :autoplay="showNum"></countTo>
                         </div>
                           <div v-show="showMapLine==3" class="map-num-line"></div>
                       </div>
                     </div>
                   </div>
                 </div>
             </div> -->

<!--              why-->
            <div class="why">
              <div class="home-container">
                <div class="why-content">
                  <div class="home-title">Why MAP Protocol</div>
                  <div class="why-bottom">
                    <div class="why-bottom-item">
                      <img src="../assets/why/one.png"/>
                      <div class="why-bottom-item-right">
                        <span>Truely Interoperability</span>
                        <span>MAP Protocol enables cross-chain transfers of data,information,assets and smart-contract instructions among independent chains.</span>
                      </div>
                    </div>
                    <div class="why-bottom-item">
                      <img src="../assets/why/two.png"/>
                      <div class="why-bottom-item-right">
                        <span>Security Guaranteed</span>
                        <span>MAP Protocol has its own MAP Chain, and the security mechanism of ledger and fund custody is guaranteed by the decentralized chain.</span>
                      </div>
                      </div>
                  </div>
                  <div class="why-bottom">
                    <div class="why-bottom-item">
                      <img src="../assets/why/three.png"/>
                      <div class="why-bottom-item-right">
                        <span>Seamless Cross-chain Integration</span>
                        <span>Upgrade existing dApps for a cross-chain version by integrating them with MAP SDK.</span>
                      </div>
                    </div>
                    <div class="why-bottom-item">
                      <img src="../assets/why/four.png"/>
                      <div class="why-bottom-item-right">
                        <span>DAO Driven</span>
                        <span>Governance system of MAP Protocol is run by DAO ,holders can participate in governance by proposals and discuss in forum.Cross chain profits generated will give back to the community.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

<!--            how-->
              <div class="how">
                <div class="home-container">
                  <div class="how-content">
                    <div class="home-title">Participate in MAP Protocol</div>
                    <div class="how-apr">
                      <div class="how-apr-item">
                        <img src="../assets/how/one.png"/>
                        <div class="how-apr-title">
                          <span>Validator</span>
                          <span>Help secure the network and earn rewards by providing computing resources.</span>
<!--                          <span>APR: - -</span>-->
                        </div>
                        <div @click="goValidator()" class="how-apr-btn">
                          GET STARTED
                          <img src="../assets/how/arrow-right.png"/>
                        </div>
                      </div>
                      <div class="how-apr-item">
                        <img class="how-apr-img-two" src="../assets/how/two.png"/>
                        <div class="how-apr-title">
                          <span >Asset Vaults</span>
                          <span>Smart contract deployed on multiple chains to secure digital assets in transfer.</span>
<!--                          <span>APR: &#45;&#45;</span>-->
                        </div>
                        <div @click="goValidator()" class="how-apr-btn">
                          GET STARTED
                          <img src="../assets/how/arrow-right.png"/>
                        </div>
                      </div>
                      <div class="how-apr-item">
                        <img class="how-apr-img-three" src="../assets/how/three.png"/>
                        <div class="how-apr-title">
                          <span>Relayer</span>
                          <span>Messenger to deliver transaction information and prepay the gas fees.</span>
<!--                          <span>APR: 36%</span>-->
                        </div>
                        <div @click="goRelayerMakalu()" class="how-apr-btn">
                          GET STARTED
                          <img src="../assets/how/arrow-right.png"/>
                        </div>
                      </div>
                      <div class="how-apr-item">
                        <img class="how-apr-img-four" src="../assets/how/four.png"/>
                        <div class="how-apr-title">
                          <span>DeFi</span>
                          <span>Participate in goverance and LP staking to earn MAP.</span>
<!--                          <span>APR: 60%</span>-->
                        </div>
                        <div @click="goHiveswap()" class="how-apr-btn">
                          GET STARTED
                          <img src="../assets/how/arrow-right.png"/>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

<!--            chart-->
           <!--   <div class="chart">
                <div class="home-container">
                  <div class="chart-content">
                      <div class="home-title">Technology comparison chart</div>
                      <div class="chart-img">
                        <img src="../assets/chart/content.png"/>
                      </div>
                    <div class="chart-vs">
                        <div class="chart-vs-top">
                          <div class="chart-vs-top-item">
                            <img src="../assets/chart/logo.png"/>
                          </div>
                          <div class="chart-vs-top-other">
                            Other projects with MPC solution<br>
                           <span> (such as <span style="color: #ec6d27">Anyswap,Thorchain,Celer and Etc</span>)</span>
                          </div>
                        </div>

                     <div class="chart-vs-content">
                        <div class="chart-vs-bottom">
                          <div class="chart-vs-bottom-item">
                            <span>more than just a bridge,but also a truly decentralized cross-chain interoperability protocol for developers</span>
                            <span>Only cross-chain bridge,no related to interoperability</span>
                          </div>
                        </div>
                        <div class="chart-vs-img">
                          <img src="../assets/chart/chart-content.png"/>
                        </div>
                        <div class="chart-vs-bottom">
                          <div class="chart-vs-bottom-item">
                            <span>backed by consensus and immutability of a fully decentralized “MAP Chain” to govern cross-chain Vaults and your transactions </span>
                            <span>MPC-dominated, assets are flowing through centralized cold wallets controlled by a few super adminsistrators, giving hackers the chance to attack and steal your digital assets. </span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div> -->

  <!--            open-->
            <div class="open">
              <div class="home-container">
                <div class="open-content">
                  <div class="open-content-item">
                    <div class="open-content-left">
                      An open-source protocol built for everyone!<br>
                      MAP Protocol is an open-source and a truly decentralized project.
                    </div>
                    <div class="open-content-right">
                      <span>Build apps capable of taking millions of users on journeys to web 3.0.</span>
                      <div @click="goScale()" class="open-content-left-btn">Build on MAP Protocol</div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

<!--            contract-->
              <div class="contract">
                <div class="home-container">
                  <img src="../assets/content/content.png"/>
                </div>
              </div>



<!--            roadmap-->
              <div class="roadmap">
                <div class="home-container">
                  <div class="roadmap-content">
                    <div class="home-title">Roadmap</div>
                    <img src="../assets/roadmap/content.png"/>
                  </div>

                </div>
              </div>

              <Partner/>

              <New/>

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
