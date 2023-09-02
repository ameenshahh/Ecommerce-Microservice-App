const express = require("express")
const app = express()

app.use(express.json())
app.use("/", (req, res, next) => {
    res.status(200).json({"msg": "Hello from shopping"})
})


app.listen(8003, ()=>{
    console.log("shopping is listening to port 8003")
})