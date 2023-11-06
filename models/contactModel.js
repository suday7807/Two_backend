const mongoose = require("mongoose")

const contactSchema =  mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    name:{
        type:String,
        require:[true, "Please Enter the name"],
    },
    email:{
        type:String,
        require:[true, "Please Enter the email"],
        unique:[true,"email is already taken"]
    },
    phone:{
        type:String,
        require:[true, "Please Enter the email"],
    },
},{
    timestamps: true
}
)

module.exports = mongoose.model("Contact",contactSchema)

