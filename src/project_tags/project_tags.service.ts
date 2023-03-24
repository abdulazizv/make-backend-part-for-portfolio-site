import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectTagDto } from './dto/create-project_tag.dto';
import { UpdateProjectTagDto } from './dto/update-project_tag.dto';
import { ProjectTag } from './schemas/project_tag.schema';

@Injectable()
export class ProjectTagsService {
  constructor(@InjectModel(ProjectTag.name) private projectModule: Model<ProjectTag>) {}

  async create(createProjectTagDto: CreateProjectTagDto):Promise<ProjectTag> {
    const newProjectTag = await this.projectModule.create(createProjectTagDto);
    return newProjectTag;
  }

  async findAll():Promise<ProjectTag[]> {
    const allProjectTag = await this.projectModule.find().populate('project_id').populate('tag_id');
    if(allProjectTag.length >= 1)
    return allProjectTag;
    else
      return null;
  }

  async findOne(id: string): Promise<ProjectTag> {
    const oneProjectTag = await this.projectModule.findById(id).populate('project_id').populate('tag_id');
    return oneProjectTag;
  }

  async update(id: string, updateProjectTagDto: UpdateProjectTagDto): Promise<ProjectTag> {
    const updatedOne = await this.projectModule.findByIdAndUpdate(id,updateProjectTagDto);
    return updatedOne;
  }

  async remove(id: string): Promise<Boolean> {
    await this.projectModule.findByIdAndDelete(id);
    return true;
  }
}
