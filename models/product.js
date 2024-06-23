const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    _id:{
        type:String
    },
    name: {
        type:String
    },
    description: {
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number
    },
    category:{
        type:String
    }
});

module.exports = mongoose.model('Product', productSchema);