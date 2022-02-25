import PostMessageSchema from "../ModelsSchema/PostMessage.js"



export const GetPost= async(req,res)=>{
    try {
        res.send("hello")
        // const responseMessage=await PostMessageSchema.find();
        // res.status(200).json();
        
    } catch (error) {
        res.status(404).json({message:error.message}) ;   
    }
}
export const CreatePost= async(req,res)=>{
  
       const post=req.body;
       const newPost=new PostMessageSchema(post);
    try {
       await newPost.save();
       res.status(201).json(newPost)

   } catch (error) {
      res.status(409).json({message:error.message}) 
   }
}