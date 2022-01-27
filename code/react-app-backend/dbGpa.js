import  mongoose from "mongoose";

const gpaSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model("gpagenie", gpaSchema); 