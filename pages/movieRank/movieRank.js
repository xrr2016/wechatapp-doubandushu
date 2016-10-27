const  api = require('../../utils/api.js')

Page({
  data:{
    movies:[],
    hidden:false
  },
  onLoad:function(){
    // this.getMovies("30")
    wx.request({
      url:"https://api.douban.com/v2/movie/coming_soon",
      method:"GET",
      success:function(res){
        console.log(res)
      }
    })
  },
  // getMovies:function(num){
  //   let url = api.searchMovies +`?count=${num}`,
  //       self = this;
  //   wx.request({
  //     url:url,
  //     method:"GET",
  //     success:function(res){
  //       let data = res.subjects
  //       console.log(data)
  //       self.setData({
  //         hidden:true,
  //         movies:data
  //       })
  //     }
  //   })
  // }
})
