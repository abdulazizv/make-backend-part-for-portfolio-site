import { Schema,SchemaFactory,Prop } from '@nestjs/mongoose'
import { HydratedDocument } from "mongoose";

export type PostDocument = HydratedDocument<Post>;

@Schema()
export class Post {
    @Prop()
    title:string;

    @Prop()
    content:string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
