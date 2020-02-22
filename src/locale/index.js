import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getStore } from '../libs/util'

import zh from './zh.json'
import en from './en.json'
import ko from './ko.json'
import ru from './ru.json'
import bd from './bd.json'
import jp from './jp.json'
import tr from './tr.json'
import wu from './wu.json'
import it from './it.json'
import ins from './ins.json'
import vn from './vn.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  fallbackLocale: 'en',
  silentTranslationWarn: process.env.NODE_ENV !== 'development',
  silentFallbackWarn: process.env.NODE_ENV !== 'development',
  locale: getStore('marcoLang') || 'en',
  messages: {
    en,
    zh,
    ko,
    ru,
    bd,
    jp,
    tr,
    wu,
    it,
    ins,
    vn
  }
})

export default i18n
