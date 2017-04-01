"# Mock_data" 
### express+require+json搭建前端模拟数据环境

用法：
1.搭建expres服务器
````
mkdir server && cd server
npm init -y
````
2.在server文件夹中新建app.js，并在package.json中的`entry`的值改为``app.js

3.安装依赖
````
npm i --save express
````

4.打开app.js,键入如下代码
````
var express=require("express");
var app=express();

app.get("/",function (req,res,next) {
    res.send("welcome to express server ");
    next();
})
var server=app.listen(3030,function () {
    var port=server.address().port;
    console.log("sever listening at localhost:"+port)
})

````
5.在根目录下运行服务器
````
node app.js
````

能看到“sever listening at localhost:3030”就说明成功启动服务器(也可以打开浏览器输入地址查看)。接下来就要搭建一个路由接口了

````
//app.js
//定义路由中转站，统一分发接口，此处为/api
var router=express.Router();
app.use("/api",router);

//引入模拟数据
var mock_data=require("./mock/data.json");
var seller=mock_data.seller;
var foods=mock_data.foods;
//编写接口
//定义/api/seller接口数据 ,浏览器打开:服务器地址/api/seller即可查看数据
router.get("/seller",function (req, res, next) {
    res.json({
        type:0,
        data:seller
    })
})
// 定义/api/foods接口数据
router.get("/foods",function (req, res, next) {
    res.json({
        type:0,
        data:foods
    })
});

````

以上，要准备好一个`data.json`的文件，我把它放在了mock文件夹里了
然后用`require("./mock/data.json")`的方式引入数据,用`res.json()`输入回应数据
<br/>
PS：本例使用`express.Router()`作为路由总代理，能更好的控制路由的定向
