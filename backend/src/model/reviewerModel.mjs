const flashCardsSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      question: { type: "string" },
      answer: { type: "string" },
    },
    required: ["question", "answer"],
  },
};

const fillBlanksSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      question: { type: "string" },
      answer: {
        type: "array",
        items: "string",
      },
    },
    required: ["question", "answer"],
  },
};

const multipleChoicesSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      question: { type: "string" },
      choices: {
        type: "array",
        items: { type: "string" },
      },
      answer: { type: "string" },
    },
    required: ["question", "choices", "answer"],
  },
};

const trueOrFalseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      question: { type: "string" },
      answer: { type: "boolean" },
      why: { type: "string" },
    },
    required: ["question", "answer"],
  },
};

const start = "given the content above, ";
const end = " using this JSON schema:";

const reviewerModel = {
  flashCards: {
    systemInstruction:
      "provide many possible flash Cards as posible that focuses on definition and terms. provide many questions as possible",
    query: start + "generate flash cards of question and answer" + end,
    model: JSON.stringify(flashCardsSchema),
  },
  fillBlanks: {
    systemInstruction:
      "fill in the blank questions, use this '______' for the blank parts. provide many questions as possible",
    query:
      start +
      "question might have 1 or more blank parts while its answer is in a array sorted accordingly" +
      end,
    model: JSON.stringify(fillBlanksSchema),
  },
  multipleChoices: {
    systemInstruction:
      "direct question and multiple choices, answer must be within the multiple choices. provide many questions as possible",
    query: start + "get the thought and provide appropriate choices" + end,
    model: JSON.stringify(multipleChoicesSchema),
  },
  trueOrFalse: {
    systemInstruction:
      "generate question that can be answered by only true or false, give the correct must be only either true or false. if the answer is false, provide a valid reason why it is false otherwise leave it as empty string, make sure that there is a valid amount of true and false answers. provide many questions as possible",
    query:
      start +
      "get the thought and provide question that can be solely answered either by true or false, also provide the correct answer to that question and the reason why if it is false otherwise leave it as an empty string" +
      end,
    model: JSON.stringify(trueOrFalseSchema),
  },
};

export default reviewerModel;
