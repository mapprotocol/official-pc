    <template>
        <div class="partner">
            <div class="home-container">
                <div class="home-title">Backed by</div>
                <div class="partner-content">
                  <img src="../assets/partner/ieee.png"/>
                  <img src="../assets/partner/block.png"/>
                  <img src="../assets/partner/poly.png"/>
                  <img src="../assets/partner/certik.png"/>

                </div>
              <div class="partner-content">
              </div>
              <div class="partner-content partner-content-h5">
                <img src="../assets/partner/ieee.png"/>
                <img src="../assets/partner/block.png"/>
                <img src="../assets/partner/poly.png"/>
                <img src="../assets/partner/certik.png"/>
              </div>
              <div class="partner-content partner-content-h5">
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
      padding: 100px 0 60px 0;
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
        width: 276px;
      }
    }

    .partner-content:nth-child(3) {
      padding-top: 13px;
      justify-content: center;
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
        padding-top: 0;
      }

      .partner-content-h5 {
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        img {
          width: 80px;
        }
      }

      .partner-content-h5:nth-child(4) {
        padding-top: 30px;
      }

      .partner-content-h5:nth-child(5) {
        padding-top: 10px;
      }

      .partner-contents {
        padding-top: 0;
      }
    }


    </style>
