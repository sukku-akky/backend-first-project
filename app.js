const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("server is created");

    res.setHeader('Content-Type','text/html');

    if(req.url=='/'){
        res.statusCode=200;
        res.end("<h1>hello world</h1>")
    } else if(req.url=="/home"){
        res.statusCode=200;
        res.end("<h1>welcome home</h1>")
    } else if(req.url=='/about'){
        res.statusCode=200;
        res.end("<h1>welcome to about us</h1>")
    } else if(req.url=="/node"){
        res.statusCode=200;
        res.end("<h1>welcome to my nodejs project</h1>")
    } else{
        res.statusCode=404;
        res.end("<h1>Page not found</h1>")
    }
})

let port=3000;
server.listen(port,()=>{
    console.log("listening");
})