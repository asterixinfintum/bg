require("dotenv").config();

import mongoose from "mongoose";

mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {
    console.log('connected to ' + process.env.MONGO_URI)
}).catch(error => {
    console.log(error)
})
 
export default mongoose;