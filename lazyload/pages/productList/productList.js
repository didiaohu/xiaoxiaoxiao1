Page({
  data:{
    // text:"这是一个页面"
    hidden: false,
    //搜索名称
    searchName: null,
    //pageindex
    pageIdx: 1,
    //产品列表
    productArr:[],
    clientHeight:0,
    arr:[],
    arrHight:[]
  },
  onLoad:function(options){
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          clientHeight: res.windowHeight
        });
      }
    })

    // 页面初始化 options为页面跳转所带来的参数
    console.log(options)

    var that = this

    var searchName = options.searchName
    console.log(searchName)
    
    that.setData({
        searchName:searchName
    })

    var params = {}
    params["page_index"] = 1
    params["page_size"] = 14
    params["keyword"] = "1.State"
    
    console.log(params["keyword"])

    wx.request({
      url: 'https://api.getweapp.com/vendor/lightstao/product/search',
      method: 'GET',
      data: {
        search_param: JSON.stringify(params),
        y: ''
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log("res",res.data)

        that.setData({
            hidden: true
        })

        var arr = [];
        var length = Array.from(res.data.data.products).length;
        var isD = length % 2 == 0 ? true : false ;
        var arrHight = [];
        for(var i = 0; i < length ; i++){
          arr[i] = false;
          arrHight[i] = Math.floor(i/2)*(320/750)*520;
        }
       
        that.setData({
          arr: arr,
          productArr: Array.from(res.data.data.products),
          arrHight:arrHight
        })
         console.log(that.data.arr)
      }
    })
  },
  scroll: function(e){
      var seeHeight = this.data.clientHeight; //可见区域高度
      var arrHight = this.data.arrHight;
      var event = e;
      var scrollTop = event.detail.scrollTop;
      var arr = this.data.arr;
      console.log(scrollTop)
      for (var i = 0; i < this.data.productArr.length; i++) {
          if (arrHight[i] < scrollTop) {
              if (arr[i] == false) {
                  arr[i] = true;
                  // arr[i*2]   arr[i*2+1] 
              }
              //n = i + 1;
          }
          //arr[i] = true;
      }
      this.setData({
          arr : arr
      })
  }

})