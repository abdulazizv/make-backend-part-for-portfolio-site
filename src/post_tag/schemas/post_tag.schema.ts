import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Post } from "../../posts/schemas/post.schema";
import { Tag } from "../../tags/schemas/tag.schema";

export type PostTagDocument = HydratedDocument<PostTag>

@Schema()
export class PostTag {
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'tag_id'})
    tag_id:Tag;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Post'})
    post_id:Post;
}

export const PostTagSchema = SchemaFactory.createForClass(PostTag);
