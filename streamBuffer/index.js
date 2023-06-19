// //createReadStream in form of chunk
// const fs=require("fs")
// let readStream=fs.createReadStream("index.txt")
// readStream.on("data",(chunk)=>{
//     console.log("------new chunk------");
//     console.log(chunk);
// })


////createReadStream in form of chunk with read
// const fs=require("fs")
// let readStream=fs.createReadStream("index.txt","utf-8")
// readStream.on("data",(chunk)=>{
//     console.log("------new chunk------");
//     console.log(chunk);
// })

// //createWriteStream
// const fs=require("fs")
// let writeStream=fs.createWriteStream("write.txt")
// writeStream.write("hello writeStream",(err)=>{
//     if(err)
//     console.log(err);
//     console.log("file written");
// })

// //createWriteStream with same chunk
// const fs=require("fs")
// let readStream=fs.createReadStream("index.txt","utf-8")
// let writeStream=fs.createWriteStream("write.txt")

// readStream.on("data",(chunk)=>{
//     writeStream.write(chunk,(err)=>{
//         console.log("file is written");
//     })
// })

//duplex stream to read and write through pipe
const fs=require("fs")
let readStream=fs.createReadStream("index.txt","utf-8")
let writeStream=fs.createWriteStream("write.txt")

readStream.pipe(writeStream)