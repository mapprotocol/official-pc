    <template>
        <div class="partner">
            <div class="partner-container">
                <div class="home-title">{{ $t('Roadmap.part') }}</div>
                <div class="partner-content">
                  <img src="../assets/partner/micr.png"/>
                  <img src="../assets/partner/soft.png"/>
                  <img src="../assets/partner/ieee.png"/>
                  <img src="../assets/partner/block.png"/>
                  <img src="../assets/partner/poly.png"/>
                </div>
              <div class="partner-content partner-content-h5">
                <img src="../assets/partner/micr.png"/>
                <img src="../assets/partner/soft.png"/>
                <img src="../assets/partner/ieee.png"/>
              </div>
              <div class="partner-content partner-content-h5">
                <img src="../assets/partner/block.png"/>
                <img src="../assets/partner/poly.png"/>
              </div>
            </div>
        </div>
    </template>

    <script>
    export default {
    name: "Partner"
    }
    </script>

    <style scoped lang="less">
    @import "../views/newHome.less";

    .partner {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .partner-container {
      padding: 100px 0 60px 0;
      width: 1000px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .partner-content {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 50px;
      img {
        width: 185px;
      }
    }

    .partner-contents {
      padding-top: 34px;
      img:nth-child(2){
        margin-left: 77px;
        margin-right: 0;
      }
    }

    .partner-content-h5 {
        display: none;
    }


    @media (max-width: 1200px) {
      .partner-container {
        width: 90%;
      }
    }

    @media (max-width: 960px) {

      .partner-content {
        display: none;
      }

      .partner-content-h5 {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          width: 110px;
        }
      }

      .partner-content-h5:nth-child(4) {
        padding-top: 10px;
      }

      .partner-contents {
        padding-top: 0;
      }
    }


    </style>
