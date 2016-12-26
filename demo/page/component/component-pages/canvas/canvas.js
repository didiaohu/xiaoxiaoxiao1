Page({
  onReady: function () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }

    // 使用1
    // this.drawBall()
    // this.interval = setInterval(this.drawBall, 17)


    // 使用2
    // save保存之前默认状态，restore后呢，会使用默认状态，在save和restore中间的状态不会使用
    const ctx = wx.createCanvasContext('canvas')
    ctx.save() 
    ctx.setFillStyle('red')
    ctx.scale(2, 2)
    ctx.fillRect(10, 10, 150, 100)
    ctx.restore()
    ctx.fillRect(50, 50, 150, 100)
    ctx.draw()
  },
  drawBall: function () {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    var context = wx.createContext()

    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)


    wx.drawCanvas({
      canvasId: 'canvas',
      actions: context.getActions()
    })

    

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.setStrokeStyle('rgba(1,1,1,0)')
      context.fill()
      context.stroke()
    }
  },
  onUnload: function () {
    clearInterval(this.interval)
  },
  long: function(){
    console.log(1111)
  },
  touchCancel: function(){
    console.log(22222)
  }
})
