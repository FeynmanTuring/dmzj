//app.js
App({
  onLaunch: function () {
    wx.setEnableDebug({
      enableDebug: true,
    })
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  }
})