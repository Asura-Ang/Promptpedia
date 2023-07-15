import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email already registered!!!"],
    required: [true, "Email is required!!!"],
  },
  username: {
    type: String,
    required: [true, "UserName is required!!!"],
    match: [
      /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
      "Username invalid, it should contain 8-20 alphanumeric letters and be unique!",
    ],
  },
  image: {
    type: String,
  },
});

// Now the below lines will be used for a server that is running for 24X7
const User = models.User || model("User", UserSchema);

export default User;

// But when we are working with Next.js we add a additional check in User declaration.
