<template>
  <div class="my-header" id="homeId">
    <div class="container">
      <div class="logo"></div>
      <div class="nav-menu animated fadeIn">
        <ul class="menu">
          <li v-for="(item,ins) in $t('header.navList')" :key="'menu_' + ins"><a href="javascript:void(0)" :class="{'nav_Active': activeNav === item.key}" @click.prevent.stop="changeNav(item)"
            ><strong>{{item.name}}</strong></a></li>
          <li><span>{{selectLang.name}}</span><span class="down"></span></li>
        </ul>
        <span class="nav_line" id="nav_line"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { setStore, getStore, setTitle } from '@/libs/util'
export default {
  name: 'MyHeader.vue',
  data () {
    return {
      activeNav: 'home',
      selectLang: {
        name: '',
        subName: '',
        tag: ''
      }
    }
  },
  created () {
    let tag = getStore('marcoLang')
    if (tag === null) {
      tag = 'en'
      setStore('marcoLang', 'en')
    }
    let langList = this.$t('header.langList') || []
    let langVo = langList.filter(item => {
      return item.tag === tag
    })
    if (langVo && langVo.length > 0) {
      this.selectLang.name = langVo[0].name
      this.selectLang.subName = langVo[0].subName
      this.selectLang.tag = langVo[0].tag
    }
  },
  methods: {
    changeNav (item) {
      this.activeNav = item.key;
      if (this.activeNav === 'why') {
        document.querySelector('#nav_line').style.transform = 'translateX(124px) translateX(0)'
      } else if (this.activeNav === 'roadMap') {
        document.querySelector('#nav_line').style.transform = 'translateX(246px) translateX(0)'
      } else if (this.activeNav === 'gitV') {
        document.querySelector('#nav_line').style.transform = 'translateX(370px) translateX(0)'
      } else if (this.activeNav === 'white') {
        document.querySelector('#nav_line').style.transform = 'translateX(495px) translateX(0)'
      } else if (this.activeNav === 'wallet') {
        document.querySelector('#nav_line').style.transform = 'translateX(620px) translateX(0)'
      } else {
        document.querySelector('#nav_line').style.transform = 'translateX(0) translateX(0)'
      }
      try {
        document.querySelector('#' + item.targetId).scrollIntoView(true);
      }catch (e) {
      }
    }
  }
}
</script>

<style scoped lang="less">
.my-header {
  width: 100%;
  height:85px;
  background: #ffffff;
  box-shadow:0 2px 5px 0 rgba(0,0,0,0.06);
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    .logo {
      display: block;
      width: 140px;
      height: 46px;
      background-image: url("../assets/image/header/logo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin: 21px 0 18px 177px;
    }
    .nav-menu {
      display: block;
      position: relative;
    }
    .nav_line {
      position: absolute;
      bottom: 0;
      width: 46px;
      height: 6px;
      background: #000000;
      transform: translateX(0) translateX(0);
      transition-duration: 0.3s;
    }
    .menu {
      display: flex;
      display: -moz-flex;
      display: -ms-flex;
      display: -webkit-flex;
      flex-direction: row;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      -webkit-flex-wrap: nowrap;
      justify-content: space-between;
      -webkit-justify-content: space-between;
      li {
        list-style-type: none;
        margin-top: 33px;
        margin-right: 77px;
        a {
          display: inline-block;
          min-width: 46px;
          text-align: center;
          font-size: 14px;
          font-family: PingFangSC-Medium,PingFang SC;
          font-weight: 500;
          color: #000000;
          line-height: 20px;
          text-decoration: none;
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
