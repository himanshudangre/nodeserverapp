var express =require('express')
var app=express()

app.get("/",(req,res)=>{
    res.send("hello user")
})
var server=app.listen(5000,function(){
    console.log("listning on port 5000")
})

module.exports = server