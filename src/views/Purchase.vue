      <template>
          <div class="purchase">
            <MyHeaderTwo/>
            <div class="home-container">
                <div class="purchase-content">
                    <div class="purchase-content-item">
                        <img src="../assets/purchase/eth.png"/>
                        <span>Ethereum</span>
                        <span>Get MAP via <span>Uniswap</span></span>
                        <button @click="goEthereum()">Purchase</button>
                    </div>
                    <div class="purchase-content-item">
                    <img src="../assets/purchase/bsc.png"/>
                    <span>Binance Smart Chain (BSC)</span>
                      <span>Get MAP via <span>Pancakeswap</span></span>
                    <button @click="goBsc()">Purchase</button>
                  </div>
                    <div class="purchase-content-item">
                      <img src="../assets/purchase/map.png"/>
                      <span>MAP Relay Chain</span>
                      <span>Get MAP via <span>Hiveswap</span></span>
                      <button @click="goMap()">Purchase</button>
                    </div>
                    <div class="purchase-content-item">
                    <img src="../assets/purchase/exchange.png"/>
                    <span>Exchange</span>
                      <span>Get MAP via <span>Exchanges</span></span>
                    <button @click="showDialog=true">Purchase</button>
                  </div>
                </div>
            </div>

<!--            dialog-->
            <div v-show="showDialog" class="dialog">
              <div class="dialog-content">
                <div @click="showDialog=false" class="dialog-error">
                  <img src="../assets/purchase/error.png"/>
                </div>
                <div class="dialog-content-eth">
                  <div class="purchase-content-item dialog-content-item">
                    <img src="../assets/purchase/kucoin.png"/>
                    <span>Kucoin</span>
                    <button @click="goKucoin()">Purchase</button>
                  </div>
                  <div class="purchase-content-item dialog-content-item">
                    <img src="../assets/purchase/bithumb.png"/>
                    <span>Bithumb</span>
                    <button @click="goBithumb()">Purchase</button>
                  </div>
                  <div class="purchase-content-item dialog-content-item">
                    <img src="../assets/purchase/coinone.png"/>
                    <span>Coinone</span>
                    <button @click="goCoinone">Purchase</button>
                  </div>
                </div>

              </div>
            </div>
          </div>
      </template>

      <script>
      import MyHeaderTwo from '../components/MyHeaderTwo'
      export default {
      name: "Purchase",
        components: {MyHeaderTwo},
        data() {
          return {
              showDialog:false
            }
        },
        methods:{
          goEthereum() {
            window.open('https://info.uniswap.org/#/pools/0xac499d3705b27cfa720385fdc998c520782c6049','blank')
          },
          goBsc() {
            window.open('https://pancakeswap.finance/info/pool/0xd034e9294833d5739d852548a9b9724c4453db5f','blank')
          },
          goMap() {
            window.open('https://swap.hiveswap.io/#/swap','blank')
          },
          goKucoin() {
            window.open('https://www.kucoin.com/ko/trade/MAP-USDT?spm=kcWeb.B7FastTrade.Header4.1','blank')
          },
          goBithumb() {
            window.open('https://www.bithumb.com/trade/order/MAP_KRW','blank')
          },
          goCoinone() {
            window.open('https://coinone.co.kr/exchange/trade/map/krw','blank')
          },
        }
      }
      </script>

      <style scoped lang="less">

      @import "../views/newHome.less";

      .purchase {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;
        font-family: Helvetica;
      }

      .purchase-content {
        width: 100%;
        padding: 100px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }

      .purchase-content-item {
          width: 239px;
          height: 303px;
          border-radius: 10px;
          background-color: rgb(244, 244, 248);
          display: flex;
          flex-direction: column;
          align-items: center;
          img {
            margin-top: 45px;
            width: 72px;
          }
        span:nth-child(2) {
          padding-top: 20px;
          font-size: 16px;
          font-weight: bold;
        }
        span:nth-child(3) {
          padding-top: 5px;
          font-size: 13px;
          padding-bottom: 40px;
        }

        button {
            width: 95px;
            height: 33px;
            border-radius: 5px;
            background-color: rgb(29, 37, 43);
            font-size: 13px;
            font-weight: bold;
            color: white;
            cursor: pointer;
        }

      }


      .dialog {
        width: 100%;
        height: 100vh;
        z-index: 10;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .dialog-content {
        padding: 20px 21px 70px 51px;
        border-radius: 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
        background: white;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .dialog-content-eth {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .dialog-error {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        img {
          cursor: pointer;
          width: 18px;
        }
      }

      .dialog-content-item {
        background: white;
        height: 100%;
        width: 100%;
        span {
          padding:17px 0 27px 0
        }
      }

      .dialog-content-item:nth-child(2) {
        padding:0 67px;
      }

      .dialog-content-item:nth-child(3) {
        padding-right:30px ;
      }

      @media(max-width: 960px) {

        .purchase-content {
          padding-top: 30px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .purchase-content-item {
          margin-top: 20px;
        }
        .dialog-content {
          box-sizing: border-box;
          width: 90%;
          padding: 20px;
        }

        .dialog-content-eth {
          width: 100%;
        }
        .dialog-content-item {
          width: 30%;
          img {
            margin-top: 20px;
            width: 55px;
          }
          button {
            width: 80px;
          }
        }

        .dialog-content-item:nth-child(2) {
          padding: 0 10px;
        }
        .dialog-content-item:nth-child(3) {
          padding-right: 0;
        }
      }


      </style>
