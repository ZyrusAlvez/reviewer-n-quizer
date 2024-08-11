import UserModel from "../model/userModel.mjs"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const userController = {

  signin: async (request, response) => {
    try {
      const salt = await bcrypt.genSalt()
      const hashedPassword = await bcrypt.hash(request.body.password, salt)

      const newUser = {
        username: request.body.username,
        password: hashedPassword,
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
      const result = await UserModel.findOne({username: req.body.username})
      if (!result){
        res.status(401).send({message: "Cannot find the User"})
      }else{
        const access = await bcrypt.compare(req.body.password, result.password)
        console.log(req.body.password)
        console.log(result.password)
        if (access){
          res.status(200).send(req.body.username)
        }else{
          res.status(400).send({message: "wrong password"})
        }
      }
    }catch(error){
      res.status(400).send({message: error.message })
    }
  }
  
}

export default userController