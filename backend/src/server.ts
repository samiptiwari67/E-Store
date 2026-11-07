import express , {Request , Response}  from "express"

const app = express()

app.get('/',(req : Request , res : Response) => {
    res.send("Hello backend")
})

app.listen(5000,() => {
    console.log("Server is listening at 5000")
})