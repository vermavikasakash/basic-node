// /* importing es module(named import)
// /* note:while importing extenstion is compulsory eg app.js and package.json is also compulsory
// import {a,b} from "./app.js"
// console.log(a);
// b();

// /* importing (default export)
// import b from "./app.js"
// b();


// /* importing common js(named import)
// /* note:while importing extenstion is not compulsory for common js eg app.js and package.json is also not req.
// const {a,b}= require ("./app.js")
// console.log(a);
// b();

// /* importing common js(default import)
// /* note:while importing extenstion is not compulsory for common js eg app.js and package.json is also not req.
const b= require ("./app.js")
console.log(b);
b();
