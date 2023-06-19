// //sync method
// const fs=require("fs")
// console.log("i'll execute first");
// let data=fs.readFileSync("./index.txt","utf-8")
// console.log(data);
// console.log("i'll execute last");

// //async method readFile
// const fs=require("fs")
// console.log("i'll execute first");
// let data=fs.readFile("./index.txt","utf-8",(err,data)=>{
//     if(err){console.log(err);}
//     else{console.log(data);}
// })
// console.log("i'll execute last");

// //async method writeFile
// const fs=require("fs")
// fs.writeFile("wite.txt","this is write file",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("file is written");}
// })

// //appendFile
// const fs=require("fs")
// fs.appendFile("wite.txt"," \n this is we-writing",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("file is we-written");}
// })

// //unlink (deleteion of a file)
// const fs=require("fs")
// fs.unlink("wite.txt",(err)=>{
//     if(err){console.log(err);}
//     else{console.log(("file is unlinked"));}
// })

// //mkdir
// const fs=require("fs")
// fs.mkdir("public",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("directory made");}
// })

// //rmdir 
// const fs=require("fs")
// fs.rmdir("public",(err)=>{
//     if(err){console.log(err);}
//     else{console.log("directory removed/deleted");}
// })