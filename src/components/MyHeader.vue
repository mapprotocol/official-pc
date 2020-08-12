<template>
  <div class="my-header" id="homeId">
    <div class="container">
      <div class="logo"></div>
      <div class="nav-menu animated fadeIn">
        <ul :class="['menu', {'en': $i18n.locale !== 'zh'}]">
          <li v-for="(item,ins) in $t('header.navList')" :key="'menu_' + ins"><a href="javascript:void(0)" :class="{'nav_Active': activeNav === item.key}" @click.prevent.stop="changeNav(item, ins)"
            ><strong>{{item.name}}</strong></a></li>
          <li>
            <div class="lang-layout"  @mouseover="selectLangVisible = true" @mouseout="selectLangVisible = false">
              <span class="lang-show">{{selectLang.name}}<i :class="['icon-select', {'up': selectLangVisible}]"></i></span>
              <ul class="lang-list" v-show="selectLangVisible">
                <li v-for="(item, i) in $t('header.langList')" :key="i" @click="changeLang(item)" :class="{active: selectLang.tag === item.tag}">{{item.name}}</li>
              </ul>
            </div>
          </li>
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
      selectLangVisible: false, // 选择语言（默认不展示）
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
    changeNav (item, ins) {
      this.activeNav = item.key
      const { path } = item;
      if (item.key === 'wallet') {
        let routeUrl = this.$router.resolve({
          path: '/about' });
        window.open(routeUrl.href, '_blank');
      } else {
        ins === 0 ? this.$router.go(0) : (path.includes('://') ? window.open(path) : document.querySelector(`#${item.path}`).scrollIntoView({
          behavior: 'smooth', // 平滑过渡
          block: 'start' // 上边框与视窗顶部平齐。默认值
        }))
        if (!path.includes('://')) {
          if (this.activeNav === 'why') {
            document.querySelector('#nav_line').style.transform = 'translateX(158px) translateX(0)'
          } else if (this.activeNav === 'roadMap') {
            document.querySelector('#nav_line').style.transform = 'translateX(280px) translateX(0)'
          } else if (this.activeNav === 'gitV') {
            document.querySelector('#nav_line').style.transform = 'translateX(400px) translateX(0)'
          } else if (this.activeNav === 'white') {
            document.querySelector('#nav_line').style.transform = 'translateX(520px) translateX(0)'
          } else if (this.activeNav === 'wallet') {
            document.querySelector('#nav_line').style.transform = 'translateX(640px) translateX(0)'
          } else {
            document.querySelector('#nav_line').style.transform = 'translateX(38px) translateX(0)'
          }
        }
      }
    },
    changeLang (item) {
      setStore('marcoLang', item.tag)
      this.$i18n.locale = item.tag;
      this.selectLangVisible = false
      this.selectLang.name = item.name
      this.selectLang.subName = item.subName;
      this.selectLang.tag = item.tag
      setTitle()
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
  position: relative;
  z-index: 888;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    .logo {
      display: block;
      width: 200px;
      height: 41px;
      background-image: url("../assets/image/header/logo.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin: 21px 0 18px 0;
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
      transform: translateX(38px) translateX(0);
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
        width: 120px;
        text-align: center;
        word-break: break-all;
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
          width: 150px;
          padding-right: 16px;
        }
      }
    }
  }
  .lang-layout {
    position: relative;
    text-align: right;
    .icon-select {
      display: inline-block;
      vertical-align: middle;
      width: 12px;
      height: 12px;
      margin-left: 8px;
      background-image: url('../assets/image/header/select-top.png');
      transform: rotate(180deg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &.up {
        transform: rotate(0);
        background-image: url('../assets/image/header/select-top.png');
      }
    }
    .lang-show {
      margin-bottom: 10px;
      display: inline-block;
    }
    .lang-list {
      position: absolute;
      width: 164px;
      min-height:212px;
      background: #ffffff;
      border:1px solid #000000;
      z-index: 999;
      li {
        width: 100%;
        cursor: pointer;
        text-align: center;
        margin: 0 0;
        font-size:14px;
        font-family:PingFangSC-Regular,PingFang SC;
        font-weight:400;
        color: #000000;
        line-height: 35px;
        &.active {
          background: #131313;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
