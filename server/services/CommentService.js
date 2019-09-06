import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const _model = new Schema({
  blogId: { type: ObjectId, ref: "Blog", required: true },
  body: { type: String },
  author: { type: ObjectId, ref: 'User', required: true }
}, { timestamps: true })

export default class CommentService {
  get repository() {
    return mongoose.model('Comment', _model)
  }
}