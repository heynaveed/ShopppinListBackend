const { ListModel } = require("../Model/ListModel");

const PostList=async(req,res)=>{
   const {title,quantity,priority,description}=req.body;
   const currentDate = new Date();
   const currentDayOfMonth = currentDate.getDate();
   const currentMonth = currentDate.getMonth(); 
   const currentYear = currentDate.getFullYear();
   const dateString = currentDayOfMonth + "-" + (currentMonth + 1) + "-" + currentYear;
   const timestamp = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

   console.log(dateString,timestamp);
   const newList= new ListModel({
    title:title,
    quantity:quantity,
    priority:priority,
    description:description,
    date:dateString,
    timestamp:timestamp
   })
   await newList.save();
   console.log(newList);
   res.send("todo added successfull");
}

const GetList=async(req,res)=>{
    const Products= await ListModel.find({});
    console.log(Products);
    res.send(Products);
}

const DeleteList=async(req,res)=>{
    const payload=req.params.listid;
    await ListModel.deleteMany({_id:payload});
    res.send("Deleted successfully");
}

module.exports={
    PostList,
    GetList,
    DeleteList
}