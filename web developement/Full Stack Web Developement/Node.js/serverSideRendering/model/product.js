const mongoose = require('mongoose');

const { Schema } = mongoose; // object destructuring

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
}
const productSchema = new Schema({
    title: { type: String, required: true, unique: true },
    description: String, // or description: { type: String },
    price: { type: Number, min: [0, 'Wrong Price'], required: true },
    discountPercentage: { type: Number, min: [0, 'Wrong discount'], max: [50, 'Wrong discount'] },
    rating: { type: Number, min: [0, 'Wrong rating'], max: [5, 'Wrong rating'], default: 0 },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    thumbnail: { type: String, required: true },
    images: [String]
});

exports.Product = mongoose.model('Product', productSchema);