const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductInfoSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'appuser'
    },
    userProducts: [
        {
        asin: {
            type: String,
            required: true
        },
        productName: {
            type: String
        },
        link: {
            type: String,
            required: true
        },
        quantity: {
            type: String
        },
        functionality: {
            type: String
        },
        quality: {
            type:String
        },
        aesthetic: {
            type: String
        }
    }]   
});

module.exports = ProductInfo = mongoose.model('productInfo', ProductInfoSchema);