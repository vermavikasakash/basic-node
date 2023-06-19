// //1-creation of dummy promise
// let myPromise=new Promise((resolve, reject) => {
//    if(true){
//     resolve("my promise resolved")
//    } 
//    else{
//     reject("my promise rejected")
//    }
// })
// //1 of 1-handle the dummy promise
// myPromise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// //real promise handle by using try and catch
// fetch("https://swapi.dev/api/people/1")
// .then(data =>data.json())
// .then(res=>console.log(res))
// .catch(err=>console.log(err))

// //real promise handle by using async and await
// async function apiFetch(){
//     let data= await fetch("https://swapi.dev/api/people/1")
//     let res=await data.json()
//     console.log(res);
// }
// apiFetch()

// //eg.2 async and await
// console.log("first");
// async function add(a,b){
//     let c=await a+b
//     let d=await a*a
//     console.log(c);
//     console.log(d);
// }
// add(3,4)
// console.log("last");


// //promises while readFile
// const fs=require("fs/promises")
// fs.readFile("index.txt","utf-8")
// .then((data)=>console.log(data))
// .catch((err)=>{console.log(err);})

// //promises while writeFile
// const fs=require("fs/promises")
// fs.writeFile("write.txt","hello write file with promise")
// .then(()=>console.log("file is written"))
// .catch((err)=>console.log(err))

// //promises while appendFile
// const fs=require("fs/promises")
// fs.appendFile("write.txt","\n this msg is from append")
// .then(()=>console.log("data is appended"))
// .catch((err)=>{console.log(err);})

// //promises while unlinkFile(to delete file)
// const fs=require("fs/promises")
// fs.unlink("write.txt")
// .then(()=>{console.log("file is unlinked (deleted)")})
// .catch((err)=>{console.log(err);})

// //promises while mkdir(to make folder)
// const fs=require("fs/promises")
// fs.mkdir("public")
// .then(()=>{console.log("folder is created");})
// .catch((err)=>{console.log(err);})

// //promises while rmdir(to delete file)
// const fs=require("fs/promises")
// fs.rmdir("public")
// .then(()=>{console.log("folder is deleted");})
// .catch((err)=>{console.log(err);})

// //promises while writeFile by using async and await
// const fs=require("fs/promises")
// async function crud(){
// await fs.writeFile("write.txt","this is written by async")
// console.log("file is written");
// }
// crud()
 
//do for unlink append mkdir rmdir
//promises while readFile by using async and await
const fs=require("fs/promises")
async function crud(){
   let data=await fs.readFile("write.txt","utf-8")
   console.log(data)
}
crud()

//do for unlink append mkdir rmdir