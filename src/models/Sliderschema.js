const mongoose =require("mongoose")

const Sliderschema= mongoose.Schema({
    title:String,
    subTitle:String,
    imgURl:String
})

module.exports=mongoose.model('sliders',Sliderschema)