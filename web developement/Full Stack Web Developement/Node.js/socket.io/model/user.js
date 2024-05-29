const mongoose = require('mongoose');

const { Schema } = mongoose;

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('database connected');
}
const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: String,
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (v) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
            },
            message: (props) => `$(props.value) is not a valid email!`,
        },
        required: true,
    },
    password: { type: String, minLength: 6, required: true },
    token: String,
    cart: [ {type: Schema.Types.ObjectID, ref: 'Product'} ],
});

exports.User = mongoose.model('User', userSchema);