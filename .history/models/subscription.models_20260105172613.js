import mongoose from "mongoose";

const sunscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Subscription price is required'],
        min: [0, 'Price must he greater than 0']
    },
    currency: {
        type: String,
        enum: 



}, { timestamps: true });