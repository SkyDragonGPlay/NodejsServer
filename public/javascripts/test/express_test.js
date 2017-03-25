/**
 * Created by zzl on 2016/8/30.
 */

// 姜佐首	D161666282	男	台南市

var express = require('express');
var app = express();

app.use(express.static('public'));

// ================================================================================
app.get('/', function (req, res) {
    console.log("主页 GET 请求");
    res.send('Hello GET');
});

app.post('/', function (req, res) {
    console.log(("主页 POST 请求"));
    res.send("Hello POST");
});

app.delete('/del_user', function (req, res) {
    console.log("/del_user 响应 DELETE 请求");
    res.send("删除页面");
});

app.get('/list_user', function (req, res) {
    console.log(("/list_user GET 请求"));
    res.send('用户请求列表');
});

app.get('/ab*cd', function (req, res) {
    console.log("/ab*cd GET 请求");
    res.send("正则匹配");
});

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
});
// ================================================================================


var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended:false});
// ================================================================================
app.get('/process_get', function (req, res) {
    response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
})
// ================================================================================



// =====================================上传文件===========================================
// var fs = require("fs");
// var multer = require('multer');
// app.use(multer({dest:'/tmp/'}).array('image'));
//
// app.post('/file_upload', function (req, res) {
//     console.log(req.files[0]);      // 上传文件信息
//
//     var des_file = __dirname + "/" + req.files[0].originalname;
//     fs.readFile(req.files[0].path, function (err, data) {
//         fs.writeFile(des_file, data, function (err) {
//             if(err){
//                 console.log(err);
//             }else{
//                 response = {
//                     message:'File uploaded successfully',
//                     filename:req.files[0].originalname
//                 };
//             }
//             console.log(response);
//             res.end(JSON.stringify(response));
//         });
//     });
// });
// ================================================================================


// =====================================Cookie 管理===========================================
var cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get('/cookie', function (req, res) {
    var cookies = req.cookies.toString();
    console.log("Cookies: ", req.cookies);
    res.end(cookies);
})

// ================================================================================


var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});


