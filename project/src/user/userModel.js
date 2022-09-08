const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs");
const jwt = require("jsonwebtoken")

const userschema = new mongoose.SchemaType({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
});

userschema.statics.findByCred = async () => {
    const user = await user.findOne({email});

    if (!user){
        throw new Error("unable to login");
    }

    const passwordMAtch = await bcrypt.compare(password, user.password);

    if (!passwordMAtch){
        throw new Error("unable to login");
    }

    return user;

};


userSchema.methods.function1 = async function () {
    const token = await jwt.sign({_id: this._id}, "secret");
    return token;
};






const User = mongoose.model("User", userschema);


module.exports = User;