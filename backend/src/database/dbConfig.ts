import { connect } from "mongoose";
import { config } from 'dotenv'
config()

const dbConnect = async () => {
    try {
        const status = await connect(process.env.MONGO_URI!);
        console.log("database connected")
    } catch (error: unknown) {
        const message: string = error instanceof Error ? error.message : "Unknown error";
        console.error('mongo connection error : ', message)
        process.exit(1)

    }
}

export default dbConnect;