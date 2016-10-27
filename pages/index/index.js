const api = require('../../utils/api.js')

Page({
  data:{
    searchKey:'',
    books:[]
  },
  onLoad:function(options){
    this.setData({
      searchKey:'',
      books:[],
      found:false
    })
  },
  searchInput:function(e){
    this.setData({
       searchKey:e.detail.value
      })
  },
  searchBooks:function(){
    let self = this,
        count = 20,
        searchKey = this.data.searchKey
    if(!searchKey){return}
    wx.request({
      url:api.searchBooks+ `?q=${searchKey}&count=${count}`,
      method:"GET",
      success:function(res){
        let books = res.data.books
        self.setData({
          books:books,
          found:true
        })
      }
    })
  },
  showBookDetail:function(e){
    let id = e.currentTarget.dataset.bookid;
    wx.navigateTo({
      url:"../detail/detail?id=" + id
    })
  }
})