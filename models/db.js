const mongoose=require("mongoose")
require("dotenv").config()
//this was the earlier link mongodb://127.0.0.1:27017/notesData
const connection = mongoose.connect(process.env.mongoURL)

module.exports=connection