const http = require("http");

const server=http.createServer((req,res)=>{
    if(req.url == "/"){
        res.end("hello , this is Home page");
    }
    else if(req.url == "/about"){
        res.end("hello , this is about page");
    }
    else if(req.url == "/contact"){
        res.end("hello , this is contact page");
    }
    else{
        res.end("404 NOt Found");
    }
    
});
server.listen("8000","127.0.0.1",()=>{
    console.log("lesening to the port no 8000");
});