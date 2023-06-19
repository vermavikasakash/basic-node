// const http=require("http")
// const fs=require("fs")

// http.createServer((req,res)=>{
//     if(req.method==="POST"){
//      if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//         let body=""
//         //event to read data
//         req.on("data",(chunk)=>{
//             body+=chunk
//         })
//         //event to end req-res cycle
//         req.on("end",()=>{
//             res.end(body)
//         })
//      }else{
//         res.end(null)
//      }
//     }
//     else{
//      if(req.url==="/" || req.url==="/home"){
//      let html=fs.createReadStream("./index.html","utf-8")
//      html.pipe(res)
//     }
//     else{
//         res.end("page not found")
//     }}
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running at port 5000");
//     }
// })

// //converting string like object
// const http=require("http")
// const fs=require("fs")
// const {parse}=require("querystring")

// http.createServer((req,res)=>{
//     if(req.method==="POST"){
//      if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//         let body=""
//         //event to read data
//         req.on("data",(chunk)=>{
//             body+=chunk
//         })
//         //event to end req-res cycle
//         req.on("end",()=>{
//             let result=parse(body)
//             res.end(JSON.stringify(result))
//         })
//      }else{
//         res.end(null)
//      }
//     }
//     else{
//      if(req.url==="/" || req.url==="/home"){
//      let html=fs.createReadStream("./index.html","utf-8")
//      html.pipe(res)
//     }
//     else{
//         res.end("page not found")
//     }}
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running at port 5000");
//     }
// })

//storing data to mongoDB
// const http=require("http")
// const fs=require("fs")
// const {parse}=require("querystring")
// const {MongoClient}=require("mongodb")

// http.createServer((req,res)=>{
//     if(req.method==="POST"){
//      if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
//         let body=""
//         //event to read data
//         req.on("data",(chunk)=>{
//             body+=chunk
//         })
//         //event to end req-res cycle
//         req.on("end",()=>{
//             let result=parse(body)
//            async function db(){
//             let client=    await MongoClient.connect("mongodb://127.0.0.1:27017")
//            let data= await client.db("USerDB").collection("user")
//            data.insertOne(result)
//             }
//             db()
//             res.end("data stored to mongo succesfully")
//         })
//      }else{
//         res.end(null)
//      }
//     }
//     else{
//      if(req.url==="/" || req.url==="/home"){
//      let html=fs.createReadStream("./index.html","utf-8")
//      html.pipe(res)
//     }
//     else{
//         res.end("page not found")
//     }}
// }).listen(5000,(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("server is running at port 5000");
//     }
// })

//hiding password
const http=require("http")
const fs=require("fs")
const {parse}=require("querystring")
const crypto=require("crypto")

http.createServer((req,res)=>{
    if(req.method==="POST"){
     if(req.headers["content-type"]==="application/x-www-form-urlencoded"){
        let body=""
        //event to read data
        req.on("data",(chunk)=>{
            body+=chunk
        })
        //event to end req-res cycle
        req.on("end",()=>{
            let password=parse(body).password
            let hashPassword=crypto.createHmac("sha256","secret").update(password).digest("hex")
            res.end(hashPassword)
        })
     
     }
    }
    else{
     if(req.url==="/" ){
     let html=fs.createReadStream("./index.html","utf-8")
     html.pipe(res)
    }
    else{
        res.end("page not found")
    }}
}).listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at port 5000");
    }
})