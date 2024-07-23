import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Name: {type: String , required: true},
    Description: {type: String, required: true},
    Price: {type:Number,required:true},
    Stock: {type:String , required: true},
    Image: {type:String },
    Category: {type:String },
    Status: { type: String, enum: ['available', 'out of stock'], default: 'available' }

});
const Product=mongoose.model("Product",productSchema);
export default Product;