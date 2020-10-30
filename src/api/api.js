import Vue from 'vue'
import http from './http'

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

//接口方法定义
let requests = {
  getNew:(params)=>http.post('medium/getMessage',params),//新闻标题获取
};

Vue.prototype.$http=requests;
export default requests;
