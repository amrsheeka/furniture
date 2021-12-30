const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    Id:{
        type: Number,
        required : true,
    },
    ImagePath : {
        type : String,
        required : false,
    },
    
    Price : {
        type : Number,
        required : true ,
    },
    Description : {
        type : String,
        required : true,
    },
    Count: {
        type: Number,
        required : false ,
    },
    IsInCart: {
        type: Boolean,
        required : false ,
    },
    Section:{
        type: String,
        required : false ,
    },
    ProductName:{
        type: String,
        required : true ,
    }

})

module.exports = mongoose.model('Product' , ProductSchema);