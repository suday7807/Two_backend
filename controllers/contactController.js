const asyncHandlier = require("express-async-handler");

const getContacts = asyncHandlier(async(req, res) => {
    res.status(200).json({ message: "Get all contacts" });
})

const createContact =  asyncHandlier(async(req, res) => {
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(404)
        throw new Error("All Fields are mendatory")
    }
    res.status(200).json({ message: "create contacts" });
})

const getContact =  asyncHandlier(async(req, res) => {
    res.status(200).json({ message: `Get contact for ${req.params.id}` });
  })


const updateContact =  asyncHandlier(async(req, res) => {
    res.status(200).json({  message: `Update contact for ${req.params.id}` });
})


const deleteContact = asyncHandlier( async(req, res) => {
    res.status(200).json({  message: `Delete contact for ${req.params.id}`});
  })




module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}