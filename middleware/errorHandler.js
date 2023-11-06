// const {constants} = require("../constant")
 
class ErrorHandlier extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
    }
} 

module.exports = ErrorHandlier;