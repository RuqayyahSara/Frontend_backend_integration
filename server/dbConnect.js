const mongoose = require("mongoose");
const config=require("config");
const url = config.get("url");

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}

mongoose.connect(url,options,(err)=>{
    if(err)
    console.log(err);
    else{
    console.log("Database connected successfully");
    }
})