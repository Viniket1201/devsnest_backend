const express = require("express");
const app = express();

const check = (req,res,next)=>{
    if(req.query.admin==="true"){
        next()
    }else{
        res.status(400).send("should admin");
    }
    
};
const sendres = (req,res)=>{
    res.status(200)
    res.json(req.query)
};

app.use(check);


app.get('/', check,sendres
);

app.get('/', (req,res)=>{
    res.send("hello");
})
// app.post('/', (req,res)=>{
//     res.send("hello");
// })

// app.post('/', (req,res)=>{
    //     res.json({text:req.body});
    // })

app.get('/', (req,res)=>{
    res.send({'a':1});
})
app.get('/', (req,res)=>{
    res.json({'a':1});
})
//200,201,400,500,501 etc.
app.get('/', (req,res)=>{
    res.sendStatus(200);
    res.send();
})

app.get('/',(req,res,next)=>{
    console.log("hello boi");
    next();
}, (req,res)=>{
    res.status(200);
    res.json(req.query);
})



app.get('/', (req,res)=>{
    res.status(200);
    res.json(req.query);
})
app.get('/product', (req,res)=>{
    res.send(req.query);
    // res.send(req.query.q);
})

app.get('/ab?cd', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})

app.get('/ab+cd', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})
app.get('/ab*cd', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})
app.get('/ab(cd)?e', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})

app.get('/a/', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})

app.get('/.*fly$/', (req,res)=>{
    res.send("abcd");
    // res.send(req.query.q);
})

app.get('/users/:userid/books/:bookid', (req,res)=>{
    res.send(req.params);
    // res.send(req.query.q);
})
app.listen(5000);