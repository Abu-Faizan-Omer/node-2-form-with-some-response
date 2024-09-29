const http=require("http")
const fs=require("fs")
const { buffer } = require("stream/consumers")
const myserver=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    
    let url=req.url
    const method=req.method

    if(url==="/")
    {
        res.write("<html>")
        res.write("<head><title>Enter message </title></head>")
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    if(url==="/message" && method==="POST")
    {
        const body=[]
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk)
        })
        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString()
            const message=parsedbody.split("=")[1]
            fs.writeFileSync("message.txt",message)
        })
        res.statusCode=302
        res.setHeader("Location","/")
        return res.end()
    }
    res.write("<html>")
    res.write("<head><title>My first node server withy res</title></head>")
    res.write("<body><h1>Welcome to my first Node Js project</h1></body>")
    res.write("</html>")
    res.end()
})
myserver.listen(3000)