//selectColor.js
//获取应用实例
var app = getApp()
Page({
  data: {
    color: [
      { key: 1, color: ' 白色 ', number: '#FFFFFF' },

      { key: 2, color: ' 红色 ', number: '#FF0000' },

      { key: 3, color: ' 绿色 ', number: '#00FF00' },

      { key: 4, color: ' 蓝色 ', number: '#0000FF' },

      { key: 5, color: ' 牡丹红 ', number: '#FF00FF' },

      { key: 6, color: ' 青色 ', number: '#00FFFF' },

      { key: 7, color: ' 黄色 ', number: '#FFFF00' },

      { key: 8, color: ' 黑色 ', number: '#000000' },

      { key: 9, color: ' 海蓝 ', number: '#70DB93' },

      { key: 10, color: ' 巧克力色 ', number: '#5C3317' },

      { key: 11, color: ' 蓝紫色 ', number: '#9F5F9F' },

      { key: 12, color: ' 黄铜色 ', number: '#B5A642' },

      { key: 13, color: ' 亮金色 ', number: '#D9D919' },

      { key: 14, color: ' 棕色 ', number: '#A67D3D' },

      { key: 15, color: ' 青铜色 ', number: '#8C7853' },

      { key: 16, color: ' 2号青铜色 ', number: '#A67D3D' },

      { key: 17, color: ' 士官服蓝色 ', number: '#5F9F9F' },

      { key: 18, color: ' 冷铜色 ', number: '#D98719' },

      { key: 19, color: ' 铜色 ', number: '#B87333' },

      { key: 20, color: ' 珊瑚红 ', number: '#FF7F00' },

      { key: 21, color: ' 紫蓝色 ', number: '#42426F' },

      { key: 22, color: ' 深棕 ', number: '#5C4033' },

      { key: 23, color: ' 深绿 ', number: '#2F4F2F' },

      { key: 24, color: ' 深铜绿色 ', number: '#4A766E' },

      { key: 25, color: ' 深橄榄绿 ', number: '#4F4F2F' },

      { key: 26, color: ' 深兰花色 ', number: '#9932CD' },

      { key: 27, color: ' 深紫色 ', number: '#871F78' },

      { key: 28, color: ' 深石板蓝 ', number: '#6B238E' },

      { key: 29, color: ' 深铅灰色 ', number: '#2F4F4F' },

      { key: 30, color: ' 深棕褐色 ', number: '#97694F' },

      { key: 32, color: ' 深绿松石色 ', number: '#7093DB' },

      { key: 33, color: ' 暗木色 ', number: '#855E42' },

      { key: 34, color: ' 淡灰色 ', number: '#545454' },

      { key: 35, color: ' 土灰玫瑰红色 ', number: '#856363' },

      { key: 36, color: ' 长石色 ', number: '#D19275' },

      { key: 37, color: ' 火砖色 ', number: '#8E2323' },

      { key: 38, color: ' 森林绿 ', number: '#238E23' },

      { key: 39, color: ' 金色 ', number: '#CD7F32' },

      { key: 40, color: ' 鲜黄色 ', number: '#DBDB70' },

      { key: 41, color: ' 灰色 ', number: '#C0C0C0' },

      { key: 42, color: ' 铜绿色 ', number: '#527F76' },

      { key: 43, color: ' 青黄色 ', number: '#93DB70' },

      { key: 44, color: ' 猎人绿 ', number: '#215E21' },

      { key: 45, color: ' 印度红 ', number: '#4E2F2F' },

      { key: 46, color: ' 土黄色 ', number: '#9F9F5F' },

      { key: 47, color: ' 浅蓝色 ', number: '#C0D9D9' },

      { key: 48, color: ' 浅灰色 ', number: '#A8A8A8' },

      { key: 49, color: ' 浅钢蓝色 ', number: '#8F8FBD' },

      { key: 59, color: ' 浅木色 ', number: '#E9C2A6' },

      { key: 60, color: ' 石灰绿色 ', number: '#32CD32' },

      { key: 61, color: ' 桔黄色 ', number: '#E47833' },

      { key: 62, color: ' 褐红色 ', number: '#8E236B' },

      { key: 63, color: ' 中海蓝色 ', number: '#32CD99' },

      { key: 64, color: ' 中蓝色 ', number: '#3232CD' },

      { key: 65, color: ' 中森林绿 ', number: '#6B8E23' },

      { key: 66, color: ' 中鲜黄色 ', number: '#EAEAAE' },

      { key: 67, color: ' 中兰花色 ', number: '#9370DB' },

      { key: 68, color: ' 中海绿色 ', number: '#426F42' },

      { key: 69, color: ' 中石板蓝色 ', number: '#7F00FF' },

      { key: 70, color: ' 中春绿色 ', number: '#7FFF00' },

      { key: 71, color: ' 中绿松石色 ', number: '#70DBDB' },

      { key: 72, color: ' 中紫红色 ', number: '#DB7093' },

      { key: 73, color: ' 中木色 ', number: '#A68064' },

      { key: 74, color: ' 深藏青色 ', number: '#2F2F4F' },

      { key: 75, color: ' 海军蓝 ', number: '#23238E' },

      { key: 76, color: ' 霓虹篮 ', number: '#4D4DFF' },

      { key: 77, color: ' 霓虹粉红 ', number: '#FF6EC7' },

      { key: 78, color: ' 新深藏青色 ', number: '#00009C' },

      { key: 79, color: ' 新棕褐色 ', number: '#EBC79E' },

      { key: 80, color: ' 暗金黄色 ', number: '#CFB53B' },

      { key: 81, color: ' 橙色 ', number: '#FF7F00' },
    ],
  },

  onLoad: function () {

  },
  //点击后关闭选色页面
  selectColor: function (e) {
    var number = e.currentTarget.dataset.number;
    console.log("number: " + number)
    try {
      wx.setStorageSync('numberColor', number)
    } catch (e) {
    }
    wx.navigateBack({
      delta: 1, // 回退前 delta(默认为1) 页面
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
  }
})
