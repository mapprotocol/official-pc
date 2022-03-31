    <template>
        <div class="partner">
            <div class="partner-container">
                <div class="home-title">{{ $t('Roadmap.part') }}</div>
                <div class="partner-content">
                  <img src="../assets/partner/micr.png"/>
                  <img src="../assets/partner/soft.png"/>
                  <img src="../assets/partner/ieee.png"/>
                  <img src="../assets/partner/poly.png"/>
<!--                  <img src="../assets/image/partner/img4.png"/>-->
                </div>
              <div class="partner-content partner-contents">

<!--                <img src="../assets/image/partner/img6.png"/>-->
<!--                <img src="../assets/image/partner/img7.png"/>-->
<!--                <img src="../assets/image/partner/img8.png"/>-->
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
      padding: 80px 0;
      width: 1200px;
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
        width: 281px;
      }
    }

    .partner-contents {
      padding-top: 34px;
    }


    @media (max-width: 1200px) {
      .partner-container {
        width: 100%;
      }
      .partner-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          margin-top: 30px;
        }
      }
      .partner-contents {
        padding-top: 0;
      }

    }

    </style>
