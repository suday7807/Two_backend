const mongoose = require("mongoose")

const connectDB= async() =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_DB,{dbname:"backendtwo"})
        console.log("database connected", connect.connection.host,connect.connection.name)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB