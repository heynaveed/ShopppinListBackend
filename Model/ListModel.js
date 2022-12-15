const mongoose=require("mongoose");

const ListSchema=new mongoose.Schema({
    title:{type:String,required:true},
    quantity:{type:String,required:true},
    priority:{type:String,required:true},
    description:{type:String,required:true},
    date :{type:String,required:true},
    timestamp:{type:String,required:true}
})

const ListModel=mongoose.model("product",ListSchema);

module.exports={ListModel};