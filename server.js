const express = require("express");
const  errorHandlier  = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const app = express()


app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use(errorHandlier)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`A hell lot of Money coming you way Uday🤑🤑🤑🤑💰💸💰💰${PORT}`)
})