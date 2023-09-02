const express = require("express")
const app = express()

app.use(express.json())
app.use("/", (req, res, next) => {
    res.status(200).json({"msg": "Hello from products"})
})


app.listen(8002, ()=>{
    console.log("products is listening to port 8002")
})