const http=require('http')//imported
/*function rqListener(req,res){ //same as below

}
http.createServer(rqListener);*/
const server=http.createServer((req,res)=>{
console.log('Hi Reni');
});
server.listen(4000);
