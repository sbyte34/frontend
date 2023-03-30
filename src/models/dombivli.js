const mongoose=require("mongoose")

const dombivli=mongoose.Schema({
    branch_name:String,
    description:String,
    address:String,
    imgs:String,
    link:String
   })
module.exports=mongoose.model("dombivlis",dombivli)