const http=require('http');
const express=require('express');
const app=express();

app.use((req,res,next)=>{
    console.log('hy');
    next();
})

app.use((req,res,next)=>{
    console.log("Bye");
    res.send("<h1>hy</h1>")
})


app.listen(3001);