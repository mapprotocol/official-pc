<template>
  <div class="my-header-mobile" id="myHeaderMobile">
    <div class="mobile-header">
      <div class="logo"></div>
      <div class="menu-icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeaderMobile.vue'
}
</script>

<style scoped lang="less">
.my-header-mobile {
  width: 100%;
  background: #ffffff;
}
.mobile-header {
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  margin-top: 9px;
  .logo {
    display: block;
    width: 102px;
    height: 34px;
    background-image: url("../assets/image/header/logo.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 9px;
  }
  .menu-icon {
    display: block;
    width: 20px;
    height: 18px;
    background-image: url("../assets/image/header/menu.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-right: 22px;
  }
}
</style>
