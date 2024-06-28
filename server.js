import express from 'express';
import cors from 'cors';
const app = express()

app.use(express.json())
app.use(cors())

app.get("/testBdd", (req, res) =>{
    console.log(req.body)
    res.send("Response Received: " + req.body)
})

app.listen(4000, () => console.log("server on localhost:4000"))