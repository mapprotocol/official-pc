import Vue from 'vue'
import http from './http'

//接口方法定义
let requests = {
    // pwdRegister:(params)=>http.post('/api/registUser',params),//注册
};

Vue.prototype.$http=requests;
export default requests;
