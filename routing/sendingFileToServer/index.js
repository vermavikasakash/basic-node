// //sending html file to server with styling
// const http=require("http")
// const fs=require("fs")

// http.createServer((req,res)=>{
//     if(req.url==="/"||req.url==="/home"){
//     //set headers
//     let index=fs.readFileSync("index.html","utf-8")
//     res.writeHead(200,"okay",{"content-type":"text/html"})
//     res.end(index)
// }else if (req.url==="/style"){
//     let css=fs.readFileSync("index.css","utf-8")
//     res.writeHead(200,"okay",{"content-type":"text/css"})
//     res.end(css)
// }
// else
// res.end("page not found")
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//     else 
//     console.log("server is running at 5000");
// })

// //sending html file including video,image to server with styling
// const http=require("http")
// const fs=require("fs")

// http.createServer((req,res)=>{
//     if(req.url==="/"||req.url==="/home"){
//     //set headers
//     let index=fs.readFileSync("index.html","utf-8")
//     res.writeHead(200,"okay",{"content-type":"text/html"})
//     res.end(index)
// }
// else if (req.url==="/style"){
//     let css=fs.readFileSync("style.css","utf-8")
//     res.writeHead(200,"okay",{"content-type":"text/css"})
//     res.end(css)
// }
// else if (req.url==="/image"){
//     let image=fs.readFileSync("bat.jpg")
//     res.writeHead(200,"okay",{"content-type":"image/jpg"})
//     res.end(image)
// }
// else if (req.url==="/video"){
//     let video=fs.readFileSync("SampleVideo.mp4")
//     res.writeHead(200,"okay",{"content-type":"video/mp4"})
//     res.end(video)
// }
// else
// res.end("page not found")
// })
// .listen(5000,(err)=>{
//     if(err)
//     console.log(err);
//     else 
//     console.log("server is running at 5000");
// })


//sending json to server by converting object into string
const http=require("http");
const { json } = require("stream/consumers");

http.createServer((req,res)=>{
    if(req.url==="/"){
    let emp=[{
        "name":"vikas",
        "id":1
    },{
        "name":"akas",
        "id":2 
    }]
   let data=JSON.stringify(emp)
   res.end(data)
}
   else{
    res.end("page not found");
   }
}

)
.listen(5000,(err)=>{
    if(err)
    console.log(err);
    else 
    console.log("server is running at 5000");
})
