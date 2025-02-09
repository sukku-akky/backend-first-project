const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

app.use(bodyParser.urlencoded({extended:true}));


app.use("/admin",adminRoutes);

app.use(shopRoutes);


app.use((req,res,next)=>{
    res.send("<h1>page not found</h1>")
});


app.listen(3001,()=>{
    console.log("server running")
});