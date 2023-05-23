import mongoose from "mongoose";

const postSchema=mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            default: "guest"
        }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model("post",postSchema)