import fs from "fs"
import express, { json } from "express"
import cors from "cors"
let List = []

const app = express()
const port = 5000
app.use(express.json())
app.use((req, res, next) => {
    res
        .header('Access-Control-Allow-Origin',
            '*');
    res
        .header('Access-Control-Allow-Methods',
            'GET, POST, PUT, DELETE');
    res
        .header('Access-Control-Allow-Headers',
            'Origin, X-Requested-With,Content-Type, Accept');
    next();
});
app.use(cors())



app.get("/products", (req, res) => {
    const items = JSON.parse(fs.readFileSync("data.json", "utf-8"))
    res.json(items)
})

app.post("/products/newlist", (req, res) => {
    const { description, quantity } = req.body
    const newItems = {description,  quantity}
    List.push(newItems)
    const templist = {"title": List}
    const title = fs.writeFileSync("provdata.json", JSON.stringify(templist))
})

app.get("/products/newlist", (req, res) => {
    const newlist = JSON.parse(fs.readFileSync("provdata.json", "utf-8"))
    res.json(newlist)
})

app.post("/", (req, res) => {
    const newlist = JSON.parse(fs.readFileSync("provdata.json", "utf-8"))  
    const update  = fs.writeFileSync("data.json", JSON.stringify(newlist))
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
