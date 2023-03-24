import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Work } from '../../work/schema/work.schema';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
    @Prop()
    name:string;

    @Prop()
    description:string;

    @Prop()
    url:string;

    @Prop({type:mongoose.Schema.Types.ObjectId, ref: 'Work'})
    work_id: Work;
}

export const projectSchema = SchemaFactory.createForClass(Project);
