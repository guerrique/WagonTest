// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {
    header: "This is a big title",
    text: "This is a greeting",
    greetings: [{greeting: "hi"}, {greeting: "hello"}, {greeting: "bonjour"}],
    count:0,
    loading: false
  },
  add: function(e){
    console.log(e)
    this.setData({
      count: this.data.count + 1
    })
  },
  bindFormSubmit: function(e) {
    // enable loading animation on send Btn
    this.setData({
      loading: !this.data.loading
    })
    // loading toast
    wx.showToast({
      title: 'Sending...',
      icon: 'loading',
      duration: 1500
    })
  },
  switch1Change: function(e) {
    console.log("switch1 a change occur with the value", e.detail.value)
  },
  switch2Change: function(e) {
    console.log("switch2 a change event occurs with the value", e.detail.value)
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