import FolderModel from "../model/folderModel.mjs";

const folderController = {
  initialSetUp: async (req, res) => {
    try {
      const result = await FolderModel.create({ userId: req.body.userId });
      res.status(201).send(result);
    } catch (error) {
      console.log(error.message);
      res.status(400).send({ message: error.message });
    }
  },

  getFolder: async (req, res) => {
    try{
      console.log(req.body.userId)
      const result = await FolderModel.findOne({userId: req.body.userId})
      if (result){
        res.status(200).send(result)
      }else{
        res.status(400).send({message: "folder not found for that userId"})
      }
    }catch(error){
      res.status(400).send({message: error.message})
    }
  },

  verifyFolder: async (req, res) => {
    try {
      console.log(req.params.id);
      const result = await FolderModel.findOne({
        "folders._id": req.params.id,
      });
      if (result) {
        res.status(200).send(result);
      } else {
        res.status(404).send("ID not valid");
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  addFolder: async (req, res) => {
    try {
      console.log(req.body);
      const result = await FolderModel.findOneAndUpdate(
        { userId: req.body.userId }, // using the userId to find the data
        { $push: { folders: req.body.folder } }, // Push the entire folder object
        { new: true }
      );
      if (!result) {
        console.log(result)
        res.status(400).send({ message: "Adding a folder failed" });
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: error.message });
    }
  },
  
  // fixed! need the userId and the _id of the folder to push to the reviewer array
  addReviewerToFolder: async (req, res) => {
    console.log(res.body)
    try {
      // Update the folder with the specified ID by adding the reviewer
      // must use strings when dealing with nested path within an array
      const updatedFolder = await FolderModel.findOneAndUpdate(
        { userId: req.body.userId, "folders._id": req.body.folderId }, // Find the folder by ID within the folders array
        { $push: { "folders.$.reviewers": req.body.reviewer } }, // Add the reviewer to the reviewers array within the matched folder
        { new: true, runValidators: true } // Return the updated document and validate
      );

      if (!updatedFolder) {
        res.status(404).send({ message: "Folder not found" });
      } else {
        res.status(200).send(updatedFolder);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  },

  editjson: async(req, res) => {
    try {
      const { folderId, reviewerId, questionIndex, newQuestion, newAnswer } = req.body;
  
      const result = await FolderModel.findOneAndUpdate(
        { 
          "folders._id": folderId,
          "folders.reviewers._id": reviewerId
        },
        { 
          $set: {
            [`folders.$[folder].reviewers.$[reviewer].json.${questionIndex}.question`]: newQuestion,
            [`folders.$[folder].reviewers.$[reviewer].json.${questionIndex}.answer`]: newAnswer
          }
        },
        {
          // in this way, we dont have to manually find the index
          arrayFilters: [
            { "folder._id": folderId }, //  filters the array of folders, finding the folder with the matching _id.
            { "reviewer._id": reviewerId } // filters the array of reviewers within the matched folder, finding the reviewer with the matching _id.
          ],
          new: true // Return the updated document
        }
      );
  
      if (result) {
        res.status(200).json({ success: true, data: result });
      } else {
        res.status(404).json({ success: false, message: "Folder or reviewer not found" });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: "Server error", error });
    }
  }
};

export default folderController;
