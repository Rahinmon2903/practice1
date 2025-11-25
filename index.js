import http from "http"
import dotenv from "dotenv"

dotenv.config();

const port=process.env.PORT

http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"});
    res.write("welcome to back end server");
    res.end();

}).listen(port,()=>{
    console.log(`server is running on port ${port}`)
})