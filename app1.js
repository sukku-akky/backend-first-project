const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    const body=[];

    if(req.url==='/'){
       fs.readFile("message.txt",{encoding:'utf-8'},(err,data)=>{
        if(err){
            console.log(err);
        }
        console.log('data from file' + data);
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write(`<body>${data}</body>`);
        res.write(
            `<body><form action="/message" method="POST" ><input type="text" name="message"/></form></body>`
        );
        res.write("</html>");
        return res.end();
       });
    } else if(url==="/message" && method==="POST"){
        req.on("data",(chunk)=>{
            body.push(chunk);

        });

        return req.on("end",()=>{
            const parsedBody=Buffer.concat(body).toString();
            const message=parsedBody.split("=")[1];

            fs.writeFile("message.txt",message,(err)=>{
                if(err){
                    console.log(err);
                }
                res.statusCode=302;
                res.setHeader("Location","/");
                return res.end();
            })

        })


    }
})
let port=3000;

server.listen(port,()=>{
    console.log('hy');

})