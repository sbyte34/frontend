const mongoose =require("mongoose")

const Testimonials= mongoose.Schema({
    title:String,
    subTitle:String,
    imgURl:String
})

module.exports=mongoose.model('t_mols',Testimonials)