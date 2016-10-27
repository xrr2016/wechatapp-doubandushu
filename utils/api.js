const API = "https://api.douban.com/v2/book"

module.exports =  {
    searchBooks:API+"/search",
    searchBookById:API + "/:id"
}