import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { Project } from "../../project/schemas/project.schema";
import { Tag } from "../../tags/schemas/tag.schema";

export type ProjectTagDocument = HydratedDocument<ProjectTag>;

@Schema()
export class ProjectTag {
    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Project'})
    project_id:Project;

    @Prop({type:mongoose.Schema.Types.ObjectId,ref:'Tag'})
    tag_id:Tag;
}

export const ProjectTagSchema = SchemaFactory.createForClass(ProjectTag);
