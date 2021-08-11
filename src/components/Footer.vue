    <style scoped lang="less">

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
      padding: 85px 0 60px 0;
      position: relative;
      z-index: 99;
    }

    .ft-container {
      width: 1200px;
      margin: 0 auto;
    }

    .footer-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .footer-title {
      img {
        width: 58px;
      }

      span {
        font-size: 23px;
        font-family: Helvetica;
        color: #FFFFFF;
      }
    }

    .footer-icon {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 61px;

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
        width: 21px;
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
      padding-top: 88px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-sub-title {
      font-size: 20px;
      font-family: Helvetica;
      color: #FFFFFF;
    }

    .footer-sub-input {
      outline-style: none;
      margin-top: 39px;
      width: 600px;
      height: 60px;
      background: #222222;
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
        font-size: 16px;
        font-family: Helvetica;
        color: white;
        height: 40px;
        background: #222222;
        border: 0;
      }

      button {
        cursor: pointer;
        width: 128px;
        height: 50px;
        background: #E44E3A;
        border-radius: 5px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #0B0B0B;
        margin-right: 5px;
      }
    }

    .footer-link {
      width: 40%;
      padding-top: 68px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .footer-all {
      padding-top: 18px;
      font-size: 16px;
      font-family: Helvetica;
      color: #595959;
    }

    .link-title {
      font-family:PingFangSC-Regular,PingFang SC;
      color: #FFFFFF;
      font-weight:400;
    }

    a {
      font-family:PingFangSC-Regular,PingFang SC;
      color: #FFFFFF;
      font-weight:400;
      text-decoration: none;
      outline-style: none;
    }

    @media (max-width: 1200px) {
      .ft-container {
        width: 100%;
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
        <div class="ft-container">
          <div class="footer-content">
            <div class="footer-title">
              <span>{{ $t('Footer.title') }}</span>
            </div>
            <div class="footer-icon">
              <a href="https://medium.com/marcopolo-protocol" target="_blank"><img src="../assets/image/footer/medium.png"/></a>
              <a href="https://t.me/MarcoPoloMAP" target="_blank"><img src="../assets/image/footer/telegram.png"/></a>
              <a href="https://twitter.com/MarcoPoloGlobal" target="_blank"><img src="../assets/image/footer/twitter.png"/></a>
              <a href="https://github.com/mapprotocol" target="_blank"><img src="../assets/image/footer/git.png"/></a>
<!--              <a href="https://bitcointalk.org/index.php?topic=5215440.new#new" target="_blank"><img-->
<!--                  src="../assets/image/footer/bittalk.png" target="_blank"/></a>-->
              <a href="https://open.kakao.com/o/gP9WduRb" target="_blank"><img src="../assets/image/footer/kakao.png"/></a>
              <a href="https://blog.naver.com/marcopay" target="_blank"><img src="../assets/image/footer/naver.png"/></a>
              <a href="https://www.coingecko.com/en/coins/map-protocol" target="_blank"> <img src="../assets/image/footer/fog.png"/></a>
              <!--                <a> <img src="../assets/image/footer/t.png"/></a>-->
              <!--                <a href="mailto:"> <img src="../assets/image/footer/email.png"/></a>-->
            </div>
            <div class="footer-sub">
              <div class="footer-sub-title">{{ $t('Footer.sub.title') }}</div>
              <form action="https://maplabs.us5.list-manage.com/subscribe/post?u=d9020390cb31cbcdcfb9df2e9&amp;id=49e9121910" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                <div class="footer-sub-input">
                  <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" required :placeholder="$t('Footer.sub.input')"/>
<!--                  <div class="clear">-->
                    <button type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">{{ $t('Footer.sub.btn') }}</button>
<!--                  </div>-->
<!--                  <button>{{ $t('Footer.sub.btn') }}</button>-->
                </div>
              </form>
            </div>

            <!--                link-->
            <div class="footer-link">
              <div class="link-title">
                <a target="_blank" href="https://etherscan.io/token/0x9e976f211daea0d652912ab99b0dc21a7fd728e4">Official ERC-20 Address</a>
              </div>
              <div class="link-line">|</div>
              <div class="link-title"><a href="mailto:cooperation@maplabs.io">Email: cooperation@maplabs.io</a></div>
<!--              <div>|</div>-->
<!--              <div>developers@MarcoPolo.link</div>-->
<!--              <div>|</div>-->
<!--              <div>developers@maplabs.io</div>-->
            </div>
            <!--            all right-->
            <div class="footer-all">
              © 2021 MarcoPolo Network Foundation, All Rights Reseved<br>
            </div>
<!--            <span style="text-align: center;width: 100%;margin-top: 20px">Email: cooperation@maplabs.io</span>-->
          </div>
        </div>
      </div>
    </template>


    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">


    <script>

    import axios from "axios";

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
