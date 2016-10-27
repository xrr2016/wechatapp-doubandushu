const api = require('../../utils/api.js')

Page({
  data:{
    searchKey:''
  },
  onLoad:function(options){
    console.log('page loaded')
  },
  searchInput:function(e){
    this.setData({
       searchKey:e.detail.value
      })
  },
  searchBooks:function(){
    let self = this,
          q  = this.data.searchKey
    if(!q){return}
    wx.request({
      url:api.searchBooks + `?q`,
      method:"GET",
      data:q,
      success:function(res){
        console.log(res)
      }
    })
  }
})