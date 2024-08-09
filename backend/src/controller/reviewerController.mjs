import { GoogleGenerativeAI, FunctionDeclarationSchemaType  } from "@google/generative-ai";
import dotenv from "dotenv"

dotenv.config()
const API_KEY = process.env.API_KEY;
const QUERY = process.env.QUERY
const genAI = new GoogleGenerativeAI(API_KEY);

export const reviewerController = async (req, res) => {
  try{
    let model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro"});

      const prompt = `${req.body.prompt}\n\n${QUERY}`
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const jsonFormat = JSON.parse(response.text().slice(7, -3));

      if(jsonFormat){
        res.status(200).send(jsonFormat)
      }else{
        res.status(400).send({message : "json error"})
      }
      
  }catch(error){
    console.log("flash card error: ", error)
    res.status(400).send({message: error.message})
  }
}