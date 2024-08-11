import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique : true,
      default : "",
    },
    password: {
      type: String,
      default : "",
    }
  }
);

// Mongoose pre-save hook that runs before the document is saved to the database.
userSchema.pre('save', function(next) {
  if (!this.username) {
    this.username = "Guest" + this._id.toString();
  }
  if (!this.password) {
    this.password = "Guest" + this._id.toString();
  }
  next();
});

const UserModel = mongoose.model("User", userSchema)

export default UserModel