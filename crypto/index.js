//note:update is returnig object,to digest object will convert to hex
const crypto=require("crypto")
let password="1234"
let hashPass=crypto.createHmac("sha256","secret").update(password).digest("hex")
console.log(hashPass);