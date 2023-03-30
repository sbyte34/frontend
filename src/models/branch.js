const mongoose=require("mongoose")

const branch=mongoose.Schema({
    branch_name:String,
    description:String,
    address:String,
    imgs:String,
    link:String
   })
module.exports=mongoose.model("branchs",branch)