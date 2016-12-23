// page/component/component-pages/event/event.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  tapme: function(e){

    // 测试结果target是view2（冒泡原理，触发事件源组件） ， currentTarget是view1（事件绑定的当前组件）
    // 参考：http://www.jb51.net/article/42492.htm
    console.log('target:', e.target.dataset, 'currentTarget:', e.currentTarget.dataset)
  }
})