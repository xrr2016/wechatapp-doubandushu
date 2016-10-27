const api = require('../../utils/api.js')

Page({
  data:{
    bookid:null,
    book:{},
    hidden:false
  },
  onLoad:function(opts){
      this.setData({
        bookid:opts.id
      })
      this.fetchBookData(this.data.bookid)
  },
  fetchBookData:function(id){
    let url = api.searchBookById,
        self = this
    wx.request({
      url:url + id,
      method:"GET",
      success:function(res){
        let book = res.data
          self.setData({
            book:book,
            hidden:true
          })
         console.log(self.data.book) 
       }
    })
  }
  
})
