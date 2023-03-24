import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async findAll(): Promise<Project[]> {
    const allProjects = await this.projectModule.find().populate('work_id').exec()
    if(allProjects) {
      return allProjects;
    } else {
      throw new HttpException(
        'Database not found',
        HttpStatus.NO_CONTENT
      )
    }
  }

  async findOne(id: string): Promise<Project> {
    const oneProject = await this.projectModule.findById(id).populate('work_id');
    return oneProject;
  }

  async update(id: string, updateProjectDto: UpdateProjectDto): Promise<Project> {
    const updatedProject = await this.projectModule.findByIdAndUpdate(id,updateProjectDto);
    return updatedProject
  }

  async remove(id: string): Promise<Boolean> {
    await this.projectModule.findByIdAndDelete(id);
    return true;
  }
}
