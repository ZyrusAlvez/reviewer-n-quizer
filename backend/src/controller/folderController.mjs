import FolderModel from "../model/folderModel.mjs";

const folderController = {

  initialSetUp: async (req, res) => {
    try {
      const result = await FolderModel.create({ userId: req.body.userId });
      res.status(201).send(result);
    } catch (error) {
      console.log(error.message)
      res.status(400).send({ message: error.message });
    }
  },

  verifyFolder: async (req, res) => {
    try{
      console.log(req.params.id)
      const result = await FolderModel.findOne({
        "folders._id" : req.params.id
      })
      if (result){
        res.status(200).send(result)
      }else{
        res.status(404).send("ID not valid")
      }
    }catch(error){
      res.status(400).send({message: error.message})
    }
  },

  addFolder: async (req, res) => {
    try {
      const result = await FolderModel.findOneAndUpdate(
        { userId: req.body.userId },                                 // using the userId to find the data
        { $push: { folders: req.body.folder } },
        { new: true}
      );
      if (!result){
        res.status(400).send({message: "adding a folder failed"})
      }else{
        console.log(result)
        res.status(200).send(result);
      }
    } catch (error) {
      console.log(error)
      res.status(400).send({ message: error.message });
    }
  },

  addReviewerToFolder: async (req, res) => {
    try {
      const { folderId, reviewer} = req.body;
      reviewer || {}

      // Update the folder with the specified ID by adding the reviewer
      // must use strings when dealing with nested path within an array
      const updatedFolder = await FolderModel.findOneAndUpdate(
        { "folders._id": folderId },                       // Find the folder by ID within the folders array
        { $push: { "folders.$.reviewers": reviewer } },    // Add the reviewer to the reviewers array within the matched folder 
        { new: true, runValidators: true }                 // Return the updated document and validate
      );

      if (!updatedFolder) {
        res.status(404).send({ message: "Folder not found" });
      }else{
        res.status(200).send(updatedFolder);
      }
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
};

export default folderController;
