import Axios from 'axios'
let baseURL = '' // 正式
//区分开发环境 正式环境
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = '/';
        break;
}
Axios.defaults.headers['Content-Type'] = 'application/json';
Axios.defaults.baseURL = baseURL
Axios.defaults.timeout = 15000;

let request = function(path, params, isPost) {
    if (params === undefined) {
        params = {}
    }
    let headers = {
        'language': 'zh'
    };
    return new Promise(resolve => {
        if (isPost) {
            return Axios.post(path, params, {
                headers: headers
            }).then(
                res => {
                    resolve(res.data);
                },
                err => {
                    resolve({ code: -1, message: '请求错误',text: JSON.stringify(err) });
                });
        } else {
            return Axios.get(path, {
                params: params,
                headers: headers
            }).then(
                res => {
                    resolve(res.data);
                },
                err => {
                    resolve({ code: -1, message: '请求错误',text: JSON.stringify(err) });
                });
        }
    });
};


export default {
    post(path, params) {
        return request(path, params, true);
    },
    get(path, params) {
        return request(path, params, false);
    },
    qrCode(path,random){
        return baseURL+ path + '?verifyToken=' + random;
    }
}



