// //routing in node (always to do explicitly)
// const http =require("http")
// http.createServer((req,res)=>{
//     if(req.url==="/" || req.url==="/home"){
//         res.end("this is home page")
//     }
//     else res.end("page not found")
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("server is runing at 5000");
// })

// //sending html in routing 
// const http =require("http")
// http.createServer((req,res)=>{
//     if(req.url==="/" || req.url==="/home"){
//         res.end("<h1>this is home page</h1>")
//     }
//     else res.end("<h1>page not found</h1>")
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//     else
//     console.log("server is runing at 5000");
// })

//req.header to accept required type data
const http=require("http")
http.createServer((req,res)=>{
    
    if(req.url==="/" || req.url==="/home"){
    //set headers
    res.writeHead(200,"okay",{"content-type":"text/html"})
   res.end("<h1>this is home</h1>")}
   else {
   res.end("<h1>page not found</h1>")
}
})
.listen(5000,(err)=>{
    if (err)
    console.log(err);
    else
    console.log("server is runnig at port 5000");
})