import UserModel from "../model/userModel.mjs"

const userController = {

  signin: async (request, response) => {
    try {
      const newUser = {
        username: request.body.username,
        password: request.body.password,
      };

      const result = await UserModel.create(newUser);
      if (result) {
        response.status(201).json(result);
      } else {
        response.status(400).send({ message: "account not created" });
      }
    } catch (error) {
      response.status(400).send({ message: error.message });
    }
  },

  login : async (req, res) => {
    try{
      const result = await UserModel.findOne({username: req.body.username, password: req.body.password})
      if (!result){
        res.status(401).send({message: "wrong password"})
      }else{
        res.status(200).send(result)
      }
    }catch(error){
      res.status(400).send({message: error.message })
    }
  }
  
}

export default userController