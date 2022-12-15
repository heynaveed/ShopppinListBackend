const { Router } = require("express");
const { BookMarkModel } = require("../Model/BookmarkModel");

const Bookmark=Router();

Bookmark.post("/",async(req,res)=>{
    const {title,quantity,priority,description,date,timestamp}=req.body;
    const newbookmark=new BookMarkModel({
        title:title,
        quantity:quantity,
        priority:priority,
        description:description,
        date:date,
        timestamp:timestamp
        })
        newbookmark.save();
        res.send("Booked Marked Successfully");
})

Bookmark.get("/",async(req,res)=>{
    const Products= await BookMarkModel.find({});
    console.log(Products);
    res.send(Products);
})
   

module.exports={Bookmark};
