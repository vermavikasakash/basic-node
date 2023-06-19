// let http=require("http")
// let fs=require("fs")

// http.createServer((req,res)=>{
//     if(req==="Post"){

//     }
//     else{
//         if(req.url==="/" || req.url==="/home"){
//             let html=fs.createReadStream("./index.html","utf-8")
//             html.pipe(res)
//         }
//         else{
//             res.end("page not found");
//         }
//     }
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("server is running at 5000");
//     }
// })
