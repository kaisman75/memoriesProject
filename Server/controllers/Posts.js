import PostMessageSchema from "../ModelsSchema/PostMessage.js"
import mongoose from 'mongoose';

export const GetPosts= async(req,res)=>{
    try {
        const responseMessage=await PostMessageSchema.find();
        res.status(200).json(responseMessage);
        
    } catch (error) {
        res.status(404).json({message:error.message}) ;   
    }
}
export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await PostMessageSchema.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
export const CreatePost= async (req,res)=>{
    const post= req.body;
  
    const newPost=new PostMessageSchema(post);
    
   
    try {
        
       await newPost.save()
      
    } catch (error) {
        console.log(error.message)
    }
}
export const UpdatePost= async(req,res)=>{
    const { id } = req.params;
    const { creator, title, message, tags, selectedFile} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const newUpdate = { creator, title, message, tags, selectedFile, _id: id };

    await PostMessageSchema.findByIdAndUpdate(id, newUpdate, { new: true });

    res.json(newUpdate);
    }

    export const deletePost = async (req, res) => {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
        await PostMessageSchema.findByIdAndRemove(id);
    
        res.json({ message: "Post deleted successfully." });
    }
    
    export const likePost = async (req, res) => {
        const { id } = req.params;
    
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
        
        const post = await PostMessageSchema.findById(id);
    
        const updatedPost = await PostMessageSchema.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
        
        res.json(updatedPost);
    }
    
