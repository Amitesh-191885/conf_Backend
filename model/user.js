import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    usertype: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 10
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: false,
        trim: true,
        minlength: 3
    },
});

export const User = mongoose.model('User', userSchema);