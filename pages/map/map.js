// pages/map/map.js
Page({

  /**
   * Page initial data
   */
  data: {
    latitude: "25.052778",
    longitude: "102.699048",
    scale: '10',
    markers: [{
      iconPath: "/images/marker.png",
      id: 0,
      latitude: 25.052778,
      longitude: 102.699048,
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