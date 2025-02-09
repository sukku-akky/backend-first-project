const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.use("/add-product",(req,res,next)=>{
    console.log("hy");
    res.send('<form action="/product" method="POST"><input type="text" name="title"/><input type="number" name="size"/><button type="submit">Submit</button></form>');

})

app.use("/product" ,(req,res,next)=>{
    console.log(req.body);
    res.redirect("/");
})


app.use("/",(req,res,next)=>{
    res.send("<h1>hello welcome</h1>")

})

app.listen(3001,()=>{
    console.log("server running")
});