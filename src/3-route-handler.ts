import express, {NextFunction,Request, Response} from "express"

const app = express(); 
app.use(express.json());

function handleBookOne(req:Request, res:Response, next:NextFunction){
    console.log(req.params);
    next();
}

function handleBookTwo(req:Request, res:Response, next:NextFunction){
    console.log("Second handler");
    return res.send(req.params);
}
    

app.get("/api/books/:bookID/:authorID", [handleBookOne, handleBookTwo]);


app.listen(3000, ()=> {console.log("Server Started")});