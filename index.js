import http from "http"

const port=3000;

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("welcome to back end");
    res.end();

}).listen(port,()=>{
    console.log("server is running on port 3000")
})