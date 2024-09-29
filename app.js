const http=require("http")
const myserver=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html')
    
    let url=req.url

    if(url==="/")
    {
        res.write("<html>")
        res.write("<head><title>Enter message </title></head>")
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write("</html>")
        return res.end()
    }
    res.write("<html>")
    res.write("<head><title>My first node server withy res</title></head>")
    res.write("<body><h1>Welcome to my first Node Js project</h1></body>")
    res.write("</html>")
    res.end()
})
myserver.listen(3000)