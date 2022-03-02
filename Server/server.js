
import 'dotenv/config'
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoute from "./routes/posts.js"


const app=express();

app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

const uri=process.env.DB_URL;
const PORT=process.env.PORT||5000;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>console.log(`server running on port :${PORT}`)))
  .catch((error)=>console.log(error.message))


app.use('/posts',postRoute)


