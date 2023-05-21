import express, {Request, Response} from "express";

const app = express();

app.use(express.json());  

// Chaining requests

app.route("/")
    .get((req:Request, res: Response)=> {
        return res.send("Get Request");
    })
    .post((req:Request, res:Response)=> {
        return res.send("Post Request");
    })
    .put((req:Request, res:Response)=> {
        return res.send("Put Request")
    })






app.listen(3000, ()=> {console.log("Server started @ port:3000")});
