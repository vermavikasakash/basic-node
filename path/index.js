
// //1-gives path including file name
// console.log(__filename);

// //1-gives path without path name
// console.log(__dirname);


// //1-joining the path using path.join() method
// const path=require("path")
// let path1=__dirname;
// let path2="index.js"
// let finalPath=path.join(path1,path2,"index.html","style.css")
// console.log(finalPath);

//2-converting of string to object using path.parse() method
// const path=require("path")
// let result=path.parse(__filename)
// console.log(result);

//eg 2.converting of string to object using path.parse() method
// const path=require("path")
// let result=path.parse("C:\\Users\\dell\\OneDrive\\Desktop\\react_project\\src")
// console.log(result);

//3-checking type of path using isAbsolute() method
// const path=require("path")
// let result=path.isAbsolute("C:\\Users\\dell\\OneDrive\\Desktop\\react_project\\src")
// console.log(result);

//eg-2
// const path=require("path")
// let result=path.isAbsolute(".index.js")
// console.log(result);

//4-to check extension   extname()     or base   basename() of a file name
// const path=require("path")
// //let result=path.extname("index.js")
// let result=path.basename("C:\\Users\\dell\\OneDrive\\Desktop\\react_project\\src")
// console.log(result);