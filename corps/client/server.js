const http=require("http")

http.createServer((req,res)=>{
    let emp=[{
        "ename":"peter",
        "sal":5000
    },
        {
            "ename":"parker",
            "sal":3000
    }]
    res.writeHead(200,"okay",{"content-type":"application/json","Access-Control-Allow-Origin":"*"})

let data=JSON.stringify(emp)
res.end(data)
})
.listen(5000,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("server is running at 5000");
    }
})