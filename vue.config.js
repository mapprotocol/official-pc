module.exports = {
  lintOnSave: false,
  productionSourceMap: false
    // devServer: {
    //     open: true,
    //     https: false,
    //     //以上的ip和端口是我们本机的;下面为需要跨域的
    //     proxy: {  //配置跨域
    //         '/api': {
    //             target: 'https://us4.api.mailchimp.com/3.0/lists/[list id]/members',  //这里后台的地址模拟的;应该填写你们真实的后台接口
    //             ws: true,
    //             changOrigin: true,  //允许跨域
    //             pathRewrite: {
    //                 '^/api': ''  //请求的时候使用这个api就可以
    //             }
    //         }
    //     }
    // }
}
