//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {
    array: []
  },
  onLoad: function (){
    util.getHotComics({
      success: res => {
        this.setData({
          array: res.data
        })
       // console.log(res)

      }
      })
  }
})
