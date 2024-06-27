import { Schema, Document, model } from "mongoose";

export interface IUser extends Document {
    googleId: string,
    name: string,
    email: string,
}

const userSchema = new Schema<IUser>({
    googleId: String,
    name: String,
    email: String,
});

export default model<IUser>('User', userSchema);