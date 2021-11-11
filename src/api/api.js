import Vue from 'vue'
import http from './http'

//接口方法定义
let requests = {
    getNews:(params)=>http.get('/announcement-list',params),//注册
};

Vue.prototype.$http=requests;
export default requests;
