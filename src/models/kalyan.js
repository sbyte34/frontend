const mongoose=require("mongoose")

const kalyan=mongoose.Schema({
    branch_name:String,
    description:String,
    address:String,
    imgs:String,
    link:String
   })
module.exports=mongoose.model("kalyans",kalyan)