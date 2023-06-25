// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    longitude: 103.992875,  //默认定位经度
    latitude: 30.552671,   //默认定位纬度
    markers: [
    //八教垃圾桶位置
    {
      id: 0,
      iconPath: "/image/scu.png",
      latitude: 30.554611,
      longitude: 103.999278,
      width: 30,  //图片显示宽度
      height: 30  //图片显示高度
    },
    {
      id: 1,
      iconPath: "/image/2.jpeg",
        latitude: 30.554003,
        longitude: 103.994427,
      width: 30,  //图片显示宽度
      height: 30  //图片显示高度
    }]
  },
 
  onLoad: function () {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        //console.log(res.latitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            latitude: res.latitude,
            longitude: res.longitude
          }]
        })
      }
    })
  },
  onReady: function () {
 
  }
})

// 跳转到扫一扫
gotosaoma() 
{
  wx.navigateTo({
    url: "pages\saoma\saoma",
  })
}
