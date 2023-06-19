// //http module
//  http=require("http")
// http.createServer((req,res)=>{
//     console.log("this is response2 from server");
//     res.end("hello world")
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//    else console.log("server is running on port 5000...");
// })

//req.url
// http=require("http")
// http.createServer((req,res)=>{
//     //console.log("this is response2 from server");
//     res.end("hello world")
//     console.log(req.url);
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//    else console.log("server is running on port 5000...");
// })

//req.method
http=require("http")
http.createServer((req,res)=>{
    //console.log("this is response2 from server");
    res.end("hello world")
    console.log(req.method);
})
.listen(5000,(err)=>{
    if(err)
    console.log(err);
   else console.log("server is running on port 5000...");
})