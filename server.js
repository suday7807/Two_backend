const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/dbConnection")
const errorMiddleware = require("./utils/errorMiddleware")
const app = express()

app.use(express.json())
app.use("/api/contacts",require("./routes/contactRoutes"))
app.use("/api/users",require("./routes/userRoutes"))
connectDB()
app.use(errorMiddleware)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`A hell lot of Money coming you way Uday🤑🤑🤑🤑💰💸💰💰${PORT}`)
})
