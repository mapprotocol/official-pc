    <template>
        <div class="partner">
            <div class="partner-container">
                <div class="title">{{ $t('Roadmap.part') }}</div>
                <div class="title-line"></div>
                <div class="partner-content">
                  <img src="../assets/image/partner/img1.png"/>
                  <img src="../assets/image/partner/img2.png"/>
                  <img src="../assets/image/partner/img5.png"/>
<!--                  <img src="../assets/image/partner/img3.png"/>-->
<!--                  <img src="../assets/image/partner/img4.png"/>-->
                </div>
              <div class="partner-content partner-contents">

<!--                <img src="../assets/image/partner/img6.png"/>-->
<!--                <img src="../assets/image/partner/img7.png"/>-->
<!--                <img src="../assets/image/partner/img8.png"/>-->
              </div>
<!--              <div class="partner-content partner-contents">-->
<!--                <img src="../assets/image/partner/img9.png"/>-->
<!--                <img src="../assets/image/partner/img10.png"/>-->
<!--                <img src="../assets/image/partner/img11.png"/>-->
<!--                <img src="../assets/image/partner/img12.png"/>-->
<!--              </div>-->
            </div>
        </div>
    </template>

    <script>
    export default {
    name: "Partner"
    }
    </script>

    <style scoped lang="less">

    .partner {
      position: relative;
      background-color: rgb(37, 37, 37);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .partner-container {
      padding: 120px 0 132px 0;
      width: 1200px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .partner-content {
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 80px;
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
