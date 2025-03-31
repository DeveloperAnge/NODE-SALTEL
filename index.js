var express=require('express');
var app=express();
var PORT=4000;
app.get('/',(req,res)=>{
    res.send('welcome to my website');
})
app.listen(PORT,()=>{
    console.log(`runningon port ${PORT}`);
})