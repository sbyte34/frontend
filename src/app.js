require("dotenv").config();
const express = require("express");
const hbs=require("hbs");
const app = express();
const mongoose = require("mongoose");
const sliders=require("./models/Sliderschema")
const branchs=require("./models/branch")
const kalyans=require("./models/kalyan")
const dombivlis=require("./models/dombivli")
const thanes=require("./models/thane")
const t_mols=require("./models/detailsschema")
mongoose.set('strictQuery', true);




// const db="mongodb+srv://smartbyte:smart88byte@cluster0.hhrwbgu.mongodb.net/sb_data?retryWrites=true&w=majority"
// const db="mongodb+srv://smartbyte:smart88byte@cluster0.hhrwbgu.mongodb.net/projectsmartbyte?retryWrites=true&w=majority"
const port = process.env.PORT|| 4001;


const routes = require("./routes/Main");
app.use('/static',express.static("public"));
app.use("/",routes);
// (templete engine)
app.set("view engine", "hbs");
app.set("views","views");
hbs.registerPartials("views/partials")

//  sliders.create({
//      title:'python',
//      subTitle:'Some quick example text to build on the card title and make the bulk of the cards content.',
//      imgURl:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fjunilearning.com%2Fblog%2Fguide%2Fwhat-is-python-101-for-students%2F&psig=AOvVaw15x2grNVjjhvK1yKpltIU7&ust=1680071247042000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKC2u6D__f0CFQAAAAAdAAAAABAI'
       
//  })


// (dbconnection)

const db=process.env.DB;
mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("connected")).catch((error)=>console.log(error.message));

app.listen(port,(req,res)=>{
    console.log(`connect on port, ${port}`);
})