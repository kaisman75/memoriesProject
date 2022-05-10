import mongoose from "mongoose";

const Schema=mongoose.Schema({
    title:String,
    message:String,
    creator:String,
    tags: [String],
    selectedFile:String,
    likeCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    }
})

const  PostMessageSchema =mongoose.model("PostMessageSchema",Schema);
export default PostMessageSchema