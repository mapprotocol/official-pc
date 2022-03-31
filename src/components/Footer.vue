    <style scoped lang="less">
    @import "../views/newHome.less";

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-transition-delay: 99999s;
      -webkit-transition: color 99999s ease-out, background-color 99999s ease-out;
    }

    .footer {
      clear: both;
      width: 100%;
      background: #0B0B0B;
      color: white;
      padding-top: 90px;
      position: relative;
      z-index: 99;
      border-radius: 60px 60px 0 0 ;
    }

    .ft-container {
      width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      padding-bottom: 80px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    .footer-line {
        width: 100%;
        height: 1px;
        opacity: 0.2;
        border-bottom: solid 1px white;
    }

    .footer-content-left {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 45%;
    }

    .footer-content-right {
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
    }

    .footer-right-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-right-item-title {
      font-size: 16px;
      font-weight: bold;
    }

    .footer-right-item-tab {
      padding-top: 42px;
      opacity: 0.41;
      font-family: Helvetica;
      font-size: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      a {
        padding-top: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
        img {
          width: 15px;
          margin-right: 9px;
        }
      }
      a:nth-child(1){
        padding-top: 0;
      }
    }

    .footer-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      img {
        width: 223px;
      }

      span {
        font-size: 23px;
        color: #FFFFFF;
      }
      a {
        text-align: left;
        width: 65%;
        font-family: Helvetica;
        color: #FFFFFF;
        font-size: 14px !important;
        cursor: pointer;
        padding-bottom: 1px;
        line-height: 28px;
      }
    }

    .footer-href {
      padding-top: 30px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      img {
        width: 10px;
        margin-right: 30px;
      }
      img:nth-child(3){
        margin-right: 0;
        margin-left:30px ;
      }
    }

    .footer-icon {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      img {
        width: 27px;
      }

      img:nth-child(3) {
        width: 29px;
      }

      img:nth-child(4) {
        width: 28px;
      }

      img:nth-child(5) {
        width: 20px;
      }

      img:nth-child(6) {
        width: 29px;
      }

      img:nth-child(7) {
        width: 43px;
      }

      img:nth-child(8) {
        width: 38px;
      }

      img:nth-child(9) {
        width: 38px;
      }
    }

    .footer-sub {
      width: 100%;
      padding-top: 43px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .footer-sub-title {
      opacity: 0.6;
      font-size: 14px;
    }

    .footer-sub-contnt {
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: center;
      img {
        width: 33px;
        margin-right: 7px;
      }
    }

    .footer-sub-input {
      outline-style: none;
      margin-top: 18px;
      width: 422px;
      height: 44px;
      background-color: rgba(244, 244, 248,0.2);
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      input {
        margin-left: 20px;
        width: 70%;
        //height: 100%;
        outline-style: none;
        font-size: 14px;
        font-family: Helvetica;
        color: white;
        height: 40px;
        background: none;
        border: 0;
      }

      button {
        cursor: pointer;
        width: 98px;
        height: 37px;
        border-radius: 5px;
        background-image: linear-gradient(to right, rgb(248, 77, 57) 0%, rgb(255, 178, 0) 100%), linear-gradient(to right, rgb(228, 78, 58) 0%, rgb(255, 177, 0) 100%), linear-gradient(to bottom, rgb(228, 78, 58), rgb(228, 78, 58));
        font-size: 13px;
        color: white;
        margin-right: 3px;
      }
    }

    .footer-link {
      width: 70%;
      padding-top: 29px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .footer-all {
      font-size: 14px;
      font-family: Helvetica;
      color: white;
      padding: 24px 0 ;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .link-title {
      color: #FFFFFF;
      font-weight:400;
    }
    .link-line {
      width: 1px;
      height: 22px;
      opacity: 0.2;
      border-right: solid 1px white;
    }

    a {
      color: #FFFFFF;
      font-size: 14px;
      text-decoration: none;
      outline-style: none;
    }

    @media (max-width: 1200px) {
      .ft-container {
        width: 100%;
      }
      .footer-link {
        width: 50%;
      }
    }


    @media (max-width: 480px) {
      .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      .footer {
        padding-top: 67px;
      }

    }
    </style>
    <template>
      <div class="footer" id="footerId">
        <div class="home-container">
          <div class="footer-content">
            <div class="footer-content-left">
              <div class="footer-title">
                <img src="../assets/header/logo.png"/>
                <div class="footer-href">
                  <a href="https://sagroups.ieee.org/bdlsc/organization/#1584280317211-e5f00cec-aefb" target="_blank">Technical Board of IEEE Computer Society Blockchain and Distributed Ledger Standards Committee</a>
                </div>
              </div>
              <div class="footer-sub">
                <div class="footer-sub-title">{{ $t('Footer.sub.title') }}</div>
                <div class="footer-sub-contnt">
                  <form action="https://maplabs.us5.list-manage.com/subscribe/post?u=d9020390cb31cbcdcfb9df2e9&amp;id=49e9121910" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                    <div class="footer-sub-input">
                      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" required :placeholder="$t('Footer.sub.input')"/>
                      <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">{{ $t('Footer.sub.btn') }}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="footer-content-right">
              <div class="footer-right-item">
                  <div class="footer-right-item-title">BUILD</div>
                  <div class="footer-right-item-tab">
                    <a href="https://docs.maplabs.io/" target="_blank">Docs</a>
                    <a href="https://github.com/mapprotocol" target="_blank">Github</a>
                  </div>
              </div>
              <div class="footer-right-item">
                <div class="footer-right-item-title">LEARN</div>
                <div class="footer-right-item-tab">
                  <a href="https://medium.com/marcopolo-protocol" target="_blank"><img src="../assets/footer/one.png"/>Medium</a>
                  <a href="https://twitter.com/MarcoPoloGlobal" target="_blank"><img src="../assets/footer/two.png"/>Twitter</a>
                  <a href="https://t.me/MAPprotocol" target="_blank"><img src="../assets/footer/three.png"/>Telegram</a>
                  <a href="https://open.kakao.com/o/gP9WduRb" target="_blank"><img src="../assets/footer/four.png"/>KakaoTalk</a>
                  <a href="https://blog.naver.com/marcopay"  target="_blank"><img src="../assets/footer/five.png"/>Blog</a>
                </div>
              </div>
              <div class="footer-right-item">
                <div class="footer-right-item-title">OTHER</div>
                <div class="footer-right-item-tab">
                  <a  href="https://etherscan.io/token/0x9e976f211daea0d652912ab99b0dc21a7fd728e4" target="_blank">Official ERC-20 Address</a>
                  <a  href="https://bscscan.com/address/0x8105ECe4ce08B6B6449539A5db23e23b973DfA8f" target="_blank">Official BSC Address</a>
                  <a  href="https://polygonscan.com/address/0xBAbceE78586d3e9E80E0d69601A17f983663Ba6a" target="_blank">Official Polygon Address</a>
                </div>
              </div>
              <!--<div class="footer-icon">
                <a href="https://medium.com/marcopolo-protocol" target="_blank"><img src="../assets/image/footer/medium.png"/></a>
                <a href="https://t.me/MAPprotocol" target="_blank"><img src="../assets/image/footer/telegram.png"/></a>
                <a href="https://twitter.com/MarcoPoloGlobal" target="_blank"><img src="../assets/image/footer/twitter.png"/></a>
                <a href="https://github.com/mapprotocol" target="_blank"><img src="../assets/image/footer/git.png"/></a>
                              <a href="https://bitcointalk.org/index.php?topic=5215440.new#new" target="_blank"><img
                                  src="../assets/image/footer/bittalk.png" target="_blank"/></a>
                <a href="https://open.kakao.com/o/gP9WduRb" target="_blank"><img src="../assets/image/footer/kakao.png"/></a>
                <a href="https://blog.naver.com/marcopay" target="_blank"><img src="../assets/image/footer/naver.png"/></a>
                <a href="https://www.coingecko.com/en/coins/map-protocol" target="_blank"> <img src="../assets/image/footer/fog.png"/></a>
                                <a> <img src="../assets/image/footer/t.png"/></a>
                                <a href="mailto:"> <img src="../assets/image/footer/email.png"/></a>
              </div>
                              link
              <div class="footer-link">
                <div class="link-title">
                  <a target="_blank" href="https://etherscan.io/token/0x9e976f211daea0d652912ab99b0dc21a7fd728e4">Official ERC-20 Address</a>
                </div>
                <div class="link-line"></div>
                <div class="link-title"><a href="mailto:cooperation@maplabs.io">Email: cooperation@maplabs.io</a></div>
              </div> -->
            </div>
          </div>
          <div class="footer-line"></div>
          <div class="footer-all">
            <a href="mailto:cooperation@maplabs.io" target="_blank">Email: cooperation@maplabs.io</a>
            <span>© 2022 Maplabs, All Rights Reseved</span>
          </div>
        </div>
        <!--                      all right-->
      </div>
    </template>


    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">


<script>

    export default {
      name: 'Footer.vue',
      data() {
    return {
          email: ''
        }
      },
      methods: {
      }
    }
    </script>


    <style type="text/css">
    #mc_embed_signup{
      background:black;
      clear:left;
      font:14px Helvetica,Arial,sans-serif;

    }

    /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
