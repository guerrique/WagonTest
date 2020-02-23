// pages/location/location.js
Page({

  /**
   * Page initial data
   */
  data: {
    latitude: "",
    longitude: "",
    scale:"10",
    markers: [{
      iconPath: "/images/marker.png",
      id: 0,
      latitude: "",
      longitude: "",
      width: 30,
      height: 30,
      callout: {
        content: "Ici c'est la maison",
        fontSize: 15,
        color: "#000000",
        padding: 10
      }
    }]
  },
  initMarkerData: function() {
    var _this = this;
    var markerList = [];
      var poiInfo = _this.data.markers[0];
      var singleMarker = {};
      singleMarker['iconPath'] =  "/images/marker.png";
      singleMarker['width'] = 30;
      singleMarker['height'] = 30;
      singleMarker['id'] = poiInfo.id;
      singleMarker['latitude'] = _this.data.latitude;
      singleMarker['longitude'] = _this.data.longitude;
      markerList.push(singleMarker);

    console.log(singleMarker);
    console.log(markerList);
    _this.setData({
      markers: markerList
    })
    return markerList;
  },
  BtnGetLocation: function() {
    var that = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res)
        console.log(that.data)
        console.log(that.data.markers.length)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        });
        that.setData({
          markers: that.initMarkerData(),
        });
        console.log(that.data)
        console.log(that.data.markers.length)
      },
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})