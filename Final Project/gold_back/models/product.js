const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000
    },
    purity:{
        type : String,
        required : true
    },
    weight:{
        type : Number,
        required:true
    },
    price: {
      type: Number,
      required: true,
      maxlength: 32,
      trim: true
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true
    },
    stock: {
      type: String
    },
    sold: {
      type: Number,
      default: 0
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    productImagePath :{
      type:String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);





// const mongoose = require("mongoose");


// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       trim: true,
//       required: true,
//       maxlength: 32
//     },
//     description: {
//       type: String,
//       trim: true,
//       required: true,
//       maxlength: 2000
//     },
//     price: {
//       type: Number,
//       required: true,
//       maxlength: 32,
//       trim: true
//     },
//     // productImagePath :{
//     //          type:String
//     //        }
    
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Product", productSchema);
