const fs = require("fs");

fs.mkdir("vks",(err)=>{
    console.log("foldetr");
});

fs.writeFile("vks/read.txt","this is awesome",(err)=>{
    console.log("file created");
    setTimeout(()=>{
        console.log("hello");
    },5000);
});

fs.appendFile("vks/read.txt","hello boyii",(err)=>{console.log("task completed");});

fs.readFile("vks/read.txt","UTF-8",(err,data)=>{
    console.log(data);
});