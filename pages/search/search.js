// pages/search/search.js
const util = require('../../utils/util.js')
var privatelyMethod = {}
var keyword = ''


Page({

  /**
   * 页面的初始数据
   */
  data: {
    placeholder: '至少两个字',
    array: [],
    keyword: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //定义搜索漫画方法
  searchComics: function(key){
    //{keyword,success,fail}
    util.searchComics({
      keyword: key,
      success: res => {
        console.log(res)

        if(!res.data.code){
          this.setData({
            array: res.data.data
          })
        } else if(res.data.code == -1){
          wx.showToast({
            title: res.data.message,
            icon: 'none',
          })
        }
      },
      fail: res => {
        console.log(res)
      }
    })
  },

  bindblur: function(e){
    
    this.data.keyword = e.detail.value
  },

  bindconfirm: function(e){
    this.data.keyword = e.detail.value

    this.searchComics(this.data.keyword)

  },

  bindSearch: function(e){
    
    this.searchComics(this.data.keyword)
    
  }


})