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
        enum: ['INR', 'USD', 'EUR'],
        default: 'INR'
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
    },
    category: {
        type: String,
        enum: ['entertainment', 'education', 'productivity', 'health', 'other'],
        require: true,
    },
    paymentMethod: {
        type: String,
        require: true,
        trim: true,
    },
    status: {
        type: String,
        enum: ['active', 'canceled', 'expired'],
        default: 'active'
    }



}, { timestamps: true });