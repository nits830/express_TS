import express from "express";

const app = express();

app.use(express.json());  // To parse json bodies. This is a middleware

//app.use(express.({extended:true})); // To parse url encoded

app.get("/", (req, res)=> {
    return res.send("Hello world");
})

app.post("/api/data", (req, res)=>{
    console.log(req.body);

    return res.sendStatus(200);
})

//Listening to all http methods
app.all("/api/all", (req, res)=> {
    return res.sendStatus(200);
})


app.listen(3000, ()=> {console.log("Server started @ port:3000")});
