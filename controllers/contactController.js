const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getContacts = asyncHandler(async(req, res) => {
    const contact= await Contact.find()
    res.status(200).json(contact);
})

const createContact =  asyncHandler(async(req, res) => {
    const {name, email, phone } = req.body
    if(!name || !email || !phone){
        res.status(404)
        res.status(400).json({ message: "all fields are mendatory" });
    }
    const contact = await Contact.create({
        name,phone,email
    })
    res.status(200).json(contact);
})

const getContact =  asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)res.status(404).json({message:"Contact Not Found"})
    res.status(200).json(contact);
  })


const updateContact =  asyncHandler(async(req, res) => {
    const contact = await Contact.findById(req.params.id)
    if(!contact)res.status(404).json({message:"Contact Not Found"})
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact);
})


const deleteContact = asyncHandler( async(req, res) => {
    res.status(200).json({  message: `Delete contact for ${req.params.id}`});
  })




module.exports = {getContacts, getContact, createContact, updateContact, deleteContact}