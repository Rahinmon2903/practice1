// import http from "http"
import dotenv from "dotenv"
import express from "express"
import fs from "fs";
import {format} from "date-fns"

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

app.get("/files",(req,res)=>{
   let today = format(new Date(),"dd-MM-yy-HH-mm-SS");
   const filepath=`Timestamp/${today}`;
   fs.writeFileSync(filepath,`${today}`,"utf-8");
   let data =fs.readFileSync(filepath,"utf-8");

   try {
    res.status(200).send(data);
    
   } catch (error) {
    res.status(504).json({message:"failed to create a file"})
    
   }
})