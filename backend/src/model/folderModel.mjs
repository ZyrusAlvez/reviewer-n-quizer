import mongoose from 'mongoose';

const folderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.ObjectId,     // This requires that userId must be an ObjectId referencing the "User" collection
      ref: "User",
      required: true
    },
    folders: {  
      type: [
        {
          name: {
            type: String,
            default: "My Folder",
            required: false
          },
          material : {
            type: String,
            required: false
          },
          reviewers: {
            type: [
              {
                classification: {
                  type: String,
                  required: false,
                  enum: ["flashCards", "fillBlanks", "multipleChoices", "trueOrFalse"]
                },
                json: {
                  type: mongoose.Schema.Types.Mixed,
                  required: false,
                }
              }
            ],
            default: []  // Default value for the reviewers array
          }
        }
      ],
      default: []  // Default value for the folders array
    }
  }
);

const FolderModel = mongoose.model('Folder', folderSchema);

export default FolderModel;