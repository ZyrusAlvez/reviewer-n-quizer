import mongoose from "mongoose";

const guestSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      default : "",
    },
  }
)

// Mongoose pre-save hook that runs before the document is saved to the database.
guestSchema.pre('save', function(next) {
  if (!this.username) {
    this.username = "Guest" + this._id.toString();
  }
  next();
});

const GuestModel = mongoose.model("Guest", guestSchema)

export default GuestModel