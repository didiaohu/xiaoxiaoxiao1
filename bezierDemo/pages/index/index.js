//index.js
//获取应用实例
var app = getApp()
Page({
  onReady:function(){

  },
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  onLoad: function () {
    this.ctx = wx.createCanvasContext('myCanvas')

    this.radius = 20;

    // 手势坐标
    this.x = 300;
    this.y = 300;

    // 控制点坐标
    this.anchorX = 200;
    this.anchorY = 300;

    // 起点坐标
    this.startX = 100;
    this.startY = 100;
    
    this.lock = true; 
  },
  onDrow: function(){
    var distance = Math.sqrt(Math.pow(this.y-this.startY, 2) + Math.pow(this.x-this.startX, 2));
    this.radius = -distance/15+20;

    // 当气泡拉到一定程度，断开链条且链条消失
    if(this.radius < 7){
      
      // 不是很理解为何写了beginPath就把原来画的给清理了???
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
      this.ctx.setFillStyle('red');
      this.ctx.fill();

      this.ctx.beginPath();
      this.ctx.setFontSize(20)
      this.ctx.setFillStyle('white');
      this.ctx.fillText('99+', this.x - 14, this.y + 6);
      this.ctx.fill();

    }else{

      // 链条还没断开时候的状态
      var offsetX = this.radius*Math.sin(Math.atan((this.y - this.startY) / (this.x - this.startX)));
      var offsetY = this.radius*Math.cos(Math.atan((this.y - this.startY) / (this.x - this.startX)));

      var x1 = this.startX - offsetX;
      var y1 = this.startY + offsetY;

      var x2 = this.x - offsetX;
      var y2 = this.y + offsetY;

      var x3 = this.x + offsetX;
      var y3 = this.y - offsetY;

      var x4 = this.startX + offsetX;
      var y4 = this.startY - offsetY;

      
      // 画贝塞尔曲线
      this.ctx.beginPath();
      this.ctx.moveTo(x1, y1);
      this.ctx.quadraticCurveTo(this.anchorX, this.anchorY, x2, y2);
      this.ctx.lineTo(x3, y3);
      this.ctx.quadraticCurveTo(this.anchorX, this.anchorY, x4, y4);
      this.ctx.lineTo(x1, y1);
      this.ctx.setFillStyle('red');
      this.ctx.fill();
      
      // 画圆圈
      this.ctx.beginPath();
      this.ctx.arc(this.startX, this.startY, this.radius, 0, 2 * Math.PI)
      this.ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI)
      this.ctx.setFillStyle('red');
      this.ctx.fill();

      // 写字    如何让文字居中，暂时还没想到办法？？
      this.ctx.beginPath();
      this.ctx.setFontSize(20)
      this.ctx.setFillStyle('white');
      this.ctx.fillText('99+', this.x - 14, this.y + 6);
      this.ctx.fill();
    }

   

    this.ctx.draw();
  },
  touchmove: function(e){
    
    this.x = e.changedTouches[0].x;
    this.y = e.changedTouches[0].y;
    this.anchorX =  (e.changedTouches[0].x + this.startX)/2;
    this.anchorY =  (e.changedTouches[0].y + this.startY)/2;
    this.onDrow();

  },
  touchend: function(e){
    this.ctx.setFillStyle('transparent');
    this.ctx.draw();

  }
})
