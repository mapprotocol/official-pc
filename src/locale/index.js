import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { getStore } from '../libs/util'

import zh from './zh.json'
import en from './en.json'
import ko from './ko.json'
import ru from './ru.json'
import jp from './jp.json'
import tr from './tr.json'
import ins from './ins.json'
import vn from './vn.json'
import pt from './pt.json'

Vue.use(VueI18n)

const i18n = new VueI18n({
  fallbackLocale: 'en',
  silentTranslationWarn: process.env.NODE_ENV !== 'development',
  silentFallbackWarn: process.env.NODE_ENV !== 'development',
  locale: getStore('marcoLang') || 'en',
  messages: {
    en,
    ko,
    tr,
    ru,
    vn,
    pt,
    ins,
    jp,
    zh
  }
});

export default i18n
