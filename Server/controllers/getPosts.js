import PostMessageSchema from "../ModelsSchema/PostMessage.js"
export const GetPost= async(req,res)=>{
    try {
        const responseMessage=await PostMessageSchema.find();
        res.status(200).json(responseMessage);
        
    } catch (error) {
        res.status(404).json({message:error.message}) ;   
    }
}
export const CreatePost=(req,res)=>{
    res.send ("ok")
}