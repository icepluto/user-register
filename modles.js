const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');


let url = "mongodb://localhost:27017/express-auth"
mongoose.connect(
  url,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  });
const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {
    type: String,
    set(val) {
      return bcryptjs.hashSync(val, 10)
    }
  },
})
const User = mongoose.model("User", UserSchema)

module.exports = {
  User
}