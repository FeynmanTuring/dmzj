//index.js
//获取应用实例
const util = require('../../utils/util.js')
const app = getApp()

Page({
  data: {

  },
  onLoad: function (){
    util.getHotComics({
      success(res){
        console.log(res)
      }})
  }
})
