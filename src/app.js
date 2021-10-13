/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var path = require('path');
var app = express();
const PORT = process.env.PORT || 1234;

/* 2. listen()メソッドを実行して1234番ポートで待ち受け。*/
var server = app.listen(PORT, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});

// View EngineにEJSを指定。
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

// "/"へのGETリクエストでindex.ejsを表示する。拡張子（.ejs）は省略されていることに注意。
app.get("/", function(req, res, next){
    res.render("index", {});
});
