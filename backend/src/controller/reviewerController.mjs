import { GoogleGenerativeAI } from "@google/generative-ai";
import quizerModel from "../model/quizerModel.mjs";
import dotenv from "dotenv"

dotenv.config()
const API_KEY = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

function runAi (instruction, query, quiz_model){
  return async function call (req, res){
    try{
      let model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction :  instruction,
        generationConfig: { responseMimeType: "application/json" }
      });

      const prompt = `${req.body.prompt}\n\n${query}\n${quiz_model}`
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const jsonFormat = JSON.parse(response.text())
      if(jsonFormat){
        res.status(200).send(jsonFormat)
      }else{
        res.status(400).send({message : "JSON error"})
      }
    }catch(error){
      res.status(400).send({message : error.message})
    }
  }
}

const reviewerController = {
  flashCards : runAi(quizerModel.flashCards.systemInstruction, quizerModel.flashCards.query, quizerModel.flashCards.model),
  fillBlanks : runAi(quizerModel.fillBlanks.systemInstruction, quizerModel.fillBlanks.query, quizerModel.fillBlanks.model),
  multipleChoices : runAi(quizerModel.multipleChoices.systemInstruction, quizerModel.multipleChoices.query, quizerModel.multipleChoices.model)
}

export default reviewerController;
