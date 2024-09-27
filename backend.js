import fs from "fs"
import express from "express"
import cors from "cors"

const app = express()
const port = 5500

app.use(express.json())
app.use(cors())

app.get("/products", (req, res) => {
    const items = JSON.parse(fs.readFileSync("data.json", "utf-8"))
    res.json(items)
})

app.post("/products", (req, res) => {
    const {variable, args} = req.body
    const newItems = [{variable, args}]
    fs.writeFileSync("data.json", JSON.stringify(newItems))
    res.json(newItems)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})