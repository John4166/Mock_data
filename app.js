/**
 * Created by Administrator on 2017/4/1.
 */
var express=require("express");
var app=express();


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

app.get("/",function (req,res,next) {
    res.send("welcome to express server ");
    next();
})
var server=app.listen(3030,function () {
    var port=server.address().port;
    console.log("sever listening at localhost:"+port)
})
