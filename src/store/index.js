import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    scroolTop: 0,
    isSelect: false, // header bg
    isSelectModel: false,
    isSelectPP: false,
    isSelectApp: false,
    isSelectFooter: false,
    isSelectFeature: false,
    isSpc: false
  },
  mutations: {
    setScroolTop (state, scroolTop) {
      state.scroolTop = scroolTop
      state.isSelect = scroolTop > 90
      state.isSelectModel =
        scroolTop + 100 > document.querySelector('#economic-model').offsetTop
      state.isSelectPP =
        scroolTop + 300 > document.querySelector('#facility').offsetTop
      state.isSelectApp =
        scroolTop + 100 > document.querySelector('#floor-app').offsetTop
      state.isSelectFooter =
        scroolTop + 450 > document.querySelector('#m-footer').offsetTop
      state.isSelectFeature =
        scroolTop + 300 > document.querySelector('#feature').offsetTop
    },
    setIsSpc (state, isSpc) {
      state.isSpc = isSpc
    }
  },
  actions: {
  }
})
