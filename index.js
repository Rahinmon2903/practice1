// import http from "http"
import dotenv from "dotenv"
import express from "express"

dotenv.config();
const app = express();
const port=process.env.PORT

// http.createServer((req,res)=>{
//     res.writeHead(200,{"content-type":"text/plain"});
//     res.write("welcome to back end server");
//     res.end();

// }).listen(port,()=>{
//     console.log(`server is running on port ${port}`)
// })

//middleware
app.use(express.json());

app.listen(port,()=>{
    console.log("server is running");
    
})

//default route
app.get("/",(req,res)=>{
    res.status(200).send("default page")
})