import { GoogleGenerativeAI } from "@google/generative-ai";
import reviewerModel from "../model/reviewerModel.mjs";
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
      const response = result.response;
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
  flashCards : runAi(reviewerModel.flashCards.systemInstruction, reviewerModel.flashCards.query, reviewerModel.flashCards.model),
  fillBlanks : runAi(reviewerModel.fillBlanks.systemInstruction, reviewerModel.fillBlanks.query, reviewerModel.fillBlanks.model),
  multipleChoices : runAi(reviewerModel.multipleChoices.systemInstruction, reviewerModel.multipleChoices.query, reviewerModel.multipleChoices.model),
  trueOrFalse : runAi(reviewerModel.trueOrFalse.systemInstruction, reviewerModel.trueOrFalse.query, reviewerModel.trueOrFalse.model)
}

export default reviewerController;
