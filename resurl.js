const http=require('http')//imported
var url=require('url')
const server=http.createServer((req,res)=>{
console.log(req.url,req.method,req.headers);
res.setHeader('Content_Type','text/html')
res.write('<html>');
res.write('<head><title>My First Page</title></head>')
res.write('<body><h1>Hello....from my Node Js Server</h1></body>')
res.write('</html>')
res.end()

if(req.url==='/node'){
    res.write('Hello....from my Node Js Server')
  res.end()
}
else if(req.url==='/home')
{res.write('Welcome home')
res.end()

}

else (req.url==='/about')
{res.write('Welcome to About Us page')
 res.end()

}





});
server.listen(3000);
