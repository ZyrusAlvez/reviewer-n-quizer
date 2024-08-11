import GuestModel from "../model/guestModel.mjs";

const guestController = { 
  getGuest : async (req, res) => {
    try{
      const result = await GuestModel.create(req.body.username)
      res.status(201).send(result)
    }catch(error){
      res.status(400).send({message: error.message})
    }  
  }
}

export default guestController