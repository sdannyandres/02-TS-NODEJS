import express, {Application,Request, Response} from 'express'
const app:Application = express()

app.get("/", async(req:Request, res:Response) => {
    res.send("HOLA A TODOS")
})
app.listen(4444)