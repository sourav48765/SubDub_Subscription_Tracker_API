import mongoose from "mongoose";

const sunscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
    }



}, { timestamps: true });