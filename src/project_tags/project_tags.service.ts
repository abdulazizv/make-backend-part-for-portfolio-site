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

  async findAll() {
    return `This action returns all projectTags`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} projectTag`;
  }

  async update(id: number, updateProjectTagDto: UpdateProjectTagDto) {
    return `This action updates a #${id} projectTag`;
  }

  async remove(id: number) {
    return `This action removes a #${id} projectTag`;
  }
}
