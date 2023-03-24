import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(@InjectModel(Project.name) private projectModule: Model<Project>) { }

  async create(createProjectDto: CreateProjectDto):Promise<Project> {
    const newProject = await this.projectModule.create(createProjectDto);
    return newProject;
  }

  async findAll() {
    return `This action returns all project`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} project`;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return `This action updates a #${id} project`;
  }

  async remove(id: number) {
    return `This action removes a #${id} project`;
  }
}
