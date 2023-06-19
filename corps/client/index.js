// fetch("http://localhost:5000/")
// .then((res)=>{
//     console.log(res) 
//     return res.json()})
//     .then((data)=>console.log("data",data))

fetch("http://localhost:5000/")
.then((res)=> res.json())
.then((data)=>{ console.log(data)
  let div=document.querySelector("div");
 let output=""
 data.forEach(e=>{
    output+=`<h1>${e.ename}</h1>`
})
div.innerHTML=output
})
