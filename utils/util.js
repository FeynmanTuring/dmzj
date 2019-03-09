const home = require('home.js')
const homeURL = "https://dmzj.nsapps.cn"

const hotURL = homeURL + "/api/dmzj/hot"

//搜索前十条: /api/dmzj/search?keyword={keyword}
const searchURL = homeURL + "/api/dmzj/search"

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//热门漫画
function getHotComics(handle){
  wx.request({
    url: hotURL,

    success(res){
      if (handle.success){
        handle.success(res)
      }

    }
    
  })
} 

//搜索漫画
//{keyword,success,fail}
var searchComics= search =>{
  if(!search.keyword) return

  var parameter = {keyword: search.keyword}
  wx.request({
    url: searchURL,
    data: parameter,
    success(res){
      if(search.success){
        search.success(res)
      }
    },
    fail(res){
      if(search.fail){
        search.fail(res)
      }
    }

  })
}

module.exports = {
  formatTime: formatTime,
  getHotComics: getHotComics,
  searchComics: searchComics
}
