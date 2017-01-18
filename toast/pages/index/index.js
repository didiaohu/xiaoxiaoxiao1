// 参考链接：https://github.com/getweapp/weapp-toast

import Promise from 'polyfill';
// 获取应用实例
let app = getApp()

Page({
    data: {
        items:{
            a:123
        }
    },

    // 仅执行一次，可用于获取、设置数据
    onLoad () {
        //创建可重复使用的WeToast实例，并附加到this上，通过this.wetoast访问
        new app.WeToast()
        // fetch("http://blog.parryqiu.com").then(function(response){console.log(response)})
    },

    onTimeToast () {
        this.wetoast.toast({
            title: 'WeToast',
            duration: 1000
        })
    }
})
