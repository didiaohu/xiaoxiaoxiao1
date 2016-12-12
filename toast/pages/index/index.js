// 参考链接：https://github.com/getweapp/weapp-toast

// 获取应用实例
let app = getApp()

Page({
    data: {},

    // 仅执行一次，可用于获取、设置数据
    onLoad () {
        //创建可重复使用的WeToast实例，并附加到this上，通过this.wetoast访问
        new app.WeToast()
    },

    onTimeToast () {
        this.wetoast.toast({
            title: 'WeToast',
            duration: 1000
        })
    }
})
