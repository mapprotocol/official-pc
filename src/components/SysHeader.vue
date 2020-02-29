<template>
  <header>
    <div class="layout-main">
      <div class="ctx-main">
        <div class="header-logo"></div>
        <ul class="header-menu">
          <!-- 页面可点击菜单 -->
          <li v-for="(navItem, index) in $t('nav')" :key="index">
            <p @click="anchor(navItem, index)"><span :class="{'active': index === currentIndex}">{{navItem.name}}</span></p>
            <p v-if="$i18n.locale !== 'en'"  class="defaultCursor">{{navItem.subName}}</p>
          </li>
          <!-- 国际化切换 -->
          <li>
            <p  @mouseover="selectLangVisible = true" @mouseout="selectLangVisible = false">
              <span>{{selectLang.name}}<i class="icon-select"></i></span>
              <ul class="lang-list" v-show="selectLangVisible">
                <li v-for="(item, i) in $t('language.langs')" :key="i" @click="changeLang(item)" :class="{active: selectLang.tag === item.tag}">{{item.name}}</li>
              </ul>
            </p>
            <p class="defaultCursor" v-if="selectLang.tag !== 'en'">{{selectLang.subName}}</p>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { setStore, getStore, setTitle } from '@/libs/util'
export default {
  name: 'SysHeader',
  data () {
    return {
      currentIndex: 0, // 当前选中菜单
      selectLangVisible: false, // 选择语言（默认不展示）
      selectLang: {
        name: '',
        subName: '',
        tag: ''
      }
    }
  },
  methods: {
    anchor (item, index) {
      const { path } = item
      index === 0 ? this.$router.go(0) : (path.includes('://') ? window.open(path) : document.querySelector(`#${item.path}`).scrollIntoView(true))
    },
    changeLang (item) {
      setStore('marcoLang', item.tag)
      this.$i18n.locale = item.tag
      this.selectLangVisible = false
      this.selectLang.name = item.name
      this.selectLang.subName = item.subName
      this.selectLang.tag = item.tag
      setTitle()
    }
  },
  created () {
    let tag = getStore('marcoLang')
    if (tag === null) {
      tag = 'en'
      setStore('marcoLang', 'en')
    }
    let langList = this.$t('language.langs') || []
    let langVo = langList.filter(item => {
      return item.tag === tag
    })
    if (langVo && langVo.length > 0) {
      this.selectLang.name = langVo[0].name
      this.selectLang.subName = langVo[0].subName
      this.selectLang.tag = langVo[0].tag
    }
  }
}
</script>

<style scoped>

</style>
