const quizSchema = {
  "type": "object",
  "properties": {
    "questions": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "type": {
            "type": "string",
            "enum": ["fill-in-the-blank", "multiple-choice", "true-false"]
          },
          "question": {
            "type": "string"
          },
          "answer": {
            "type": "string"
          },
          "explanation": {
            "type": "string"
          },
          "options": {
            "type": "array",
            "items": {
              "type": "string"
            }
          }
        },
        "required": ["type", "question", "answer"]
      }
    }
  },
  "required": ["questions"]
};

const reviewerModel = {
  quiz : {
    systemInstruction: "Create a JSON object containing practice questions based on the provided text about the human brain. Include questions in various formats, such as fill-in-the-blank, multiple choice, matching, and true/false. Ensure that each question has a clear prompt, correct answer, and an explanation for why the answer is correct. please provide many questions as possible per sentence or topic",
    query: "given the content above, provide many set of questions as possible using this JSON schema:",
    model: JSON.stringify(quizSchema)
  }
};

export default reviewerModel;
