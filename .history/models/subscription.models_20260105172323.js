import mongoose from "mongoose";

const sunscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Subscription name is required'],
        trim: true,
        minLengt
    }



}, { timestamps: true });