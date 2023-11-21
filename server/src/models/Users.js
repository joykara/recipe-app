import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.methods.isValidPassword = function (password) {
    return password === this.password;
}

export const UserModel = mongoose.model('users', UserSchema);

