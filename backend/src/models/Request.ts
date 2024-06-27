import { Schema, Document, model } from "mongoose";

interface IRequest extends Document {
    category: string,
    comments: string,
    userId:  Schema.Types.ObjectId,
}


const requestSchema = new Schema<IRequest>({
    category: String,
    comments: String,
    userId: Schema.Types.ObjectId,
});

export default model<IRequest>('Request', requestSchema)