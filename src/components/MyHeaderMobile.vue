<template>
  <div class="my-header-mobile" id="myHeaderMobile">
    <div class="mobile-header">
      <div class="logo"></div>
      <div class="menu-icon" @click.prevent.stop="setMenuShow"></div>
    </div>
    <div v-if="menuShow" class="m-mobile-layout">
      <ul class='menu-list animated fadeInDown'>
        <li v-for="(item,ins) in $t('header.navList')" :key="'menu_' + ins"><a href="javascript:void(0)" :class="{'nav_Active': activeNav === item.key}" @click.prevent.stop="changeNav(item, ins)"
        ><strong>{{item.name}}</strong></a></li>
        <li class="mLang-list">
          <span v-for="(item, i) in $t('header.langList')" :key="i"><strong  @click="changeLang(item)" :class="{'active': selectLang.tag === item.tag}">{{item.name}}</strong><i v-if="i < $t('header.langList').length - 1"> | </i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { setStore, getStore, setTitle } from '@/libs/util'
export default {
  name: 'MyHeaderMobile.vue',
  data () {
    return {
      menuShow: false,
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
    setMenuShow () {
      this.menuShow = !this.menuShow;
    },
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
      }
    },
    changeLang (item) {
      this.menuShow = false;
      setStore('marcoLang', item.tag)
      this.$i18n.locale = item.tag;
      this.selectLangVisible = false
      this.selectLang.name = item.name
      this.selectLang.subName = item.subName;
      this.selectLang.tag = item.tag;
      setTitle()
    }
  }
}
</script>

<style scoped lang="less">
.my-header-mobile {
  width: 100%;
  background: #ffffff;
  position: relative;
  z-index: 40;
}
.mobile-header {
  display: flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  margin-top: 26px;
  .logo {
    display: block;
    width: 100px;
    height: 20.5px;
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
.m-mobile-layout {
  position: absolute;
  background: #ffffff;
}
.menu-list {
  width: 100%;
  min-height:284px;
  background: #ffffff;
  li {
    width: calc(100% - 36px);
    margin: 0 18px;
    text-align: center;
    border-bottom: 1px solid #E0E0E0;
    padding: 9px 0 11px 0;
    a {
      text-decoration: none;
      strong {
        font-size:14px;
        font-family:Helvetica;
        color: #000000;
        line-height:17px;
      }
      &.nav_Active {
        strong {
          font-family:Helvetica-Bold,Helvetica;
          font-weight:bold;
        }
      }
    }
  }
}
  .mLang-list {
    strong.active {
      font-weight: bold;
    }
  }
</style>
