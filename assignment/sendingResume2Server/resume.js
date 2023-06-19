const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
    if(req.url==="/"||req.url==="/resume"){
    //set headers
    let resume=fs.readFileSync("resume.html","utf-8")
    res.writeHead(200,"okay",{"content-type":"text/html"})
    res.end(resume)
}else if (req.url==="/style"){
    let css=fs.readFileSync("resume.css","utf-8")
    res.writeHead(200,"okay",{"content-type":"text/css"})
    res.end(css)
}
else
res.end("page not found")
})
.listen(5000,(err)=>{
    if(err)
    console.log(err);
    else 
    console.log("server is running at 5000");
})