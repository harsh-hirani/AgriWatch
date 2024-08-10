import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
   
state:String,
district:String,
market:String,
commodity:String,
variety:String,
grade:String,
arrival_date:String,
min_price:String,
max_price:String,
modal_price:String,
});

const Base= mongoose.models.user||mongoose.model("data",userSchema)
export default Base;