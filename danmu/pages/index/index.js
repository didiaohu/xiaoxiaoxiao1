//index.js
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}

Page({
  onLoad: function () {
    var _this = this;
    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        //video标签认宽度300px、高度225px，设置宽高需要通过wxss设置width和height。
        var videoHeight = (225 / 300) * windowWidth//屏幕高宽比  
        console.log('videoWidth: ' + windowWidth)
        console.log('videoHeight: ' + videoHeight)
        _this.setData({
          videoWidth: windowWidth,
          videoHeight: videoHeight
        })
      }
    })
  },
  onReady: function (res) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
  onShow: function () {
    var _this = this;
    //获取年数
    wx.getStorage({
      key: 'numberColor',
      success: function (res) {
        console.log(res.data + "numberColor----")
        _this.setData({
          numberColor: res.data,
        })
      }
    })
  },
  inputValue: '',
  data: {
    isRandomColor: true,//默认随机
    src: '',
    numberColor: "#ff0000",//默认黑色

    danmuList: [
      {
        text: '第 1s 出现的红色弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 2s 出现的绿色弹幕',
        color: '#00ff00',
        time: 2
      }
    ]
  },
  bindInputBlur: function (e) {
    this.inputValue = e.detail.value
  },
  bindSendDanmu: function () {
    if (this.data.isRandomColor) {
      var color = getRandomColor();
    } else {
      var color = this.data.numberColor;
    }

    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: color
    })
  },
  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  //选择颜色页面
  selectColor: function () {
    wx.navigateTo({
      url: '../selectColor/selectColor',
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  //switch是否选中
  switchChange: function (e) {
    this.setData({
      isRandomColor: e.detail.value
    })
  }
})
