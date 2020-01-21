const mongoose = require("mongoose");
const config=require("config");
const url = config.get("url");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,options,(err)=>{
    if(err)
    console.log(err);
    console.log("Database connected successfully");
})