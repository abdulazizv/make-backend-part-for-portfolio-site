import {Prop,Schema,SchemaFactory} from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type TagDocument = HydratedDocument<Tag>
@Schema()
export class Tag {
    @Prop({unique:true})
    name:string;
}

export const tagSchema = SchemaFactory.createForClass(Tag);
