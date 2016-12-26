Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/green_tri.png', // 目前有 bug，正确的写法应该是 /image/green_tri.png ，等我们下个版本修复吧T_T 
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/green_tri.png',
      rotate: 180
    }],
    circles: [
      {
        latitude: 23.099994,
        longitude: 113.344520,
        color:'#000000AA',
        fillColor: '#000000AA',
        radius: 150
      }
    ],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      },  {
        longitude: 153.324520,
        latitude: 23.21229
      }],
      color:"#FF0000DD",
      width: 2,
      dottedLine: true
    }], 
    points:[
      {
        longitude: 113.3245211,
        latitude: 23.10229
      },
      {
        longitude: 113.324520,
        latitude: 23.21229
      },
      {
        longitude: 113.524520,
        latitude: 23.21229
      }
    ]
  },
  bindmarkertap:function(){
    console.log('bindmarkertap')
  }
})
