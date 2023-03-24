import { Injectable } from '@nestjs/common';
import { CreateProjectTagDto } from './dto/create-project_tag.dto';
import { UpdateProjectTagDto } from './dto/update-project_tag.dto';

@Injectable()
export class ProjectTagsService {
  create(createProjectTagDto: CreateProjectTagDto) {
    return 'This action adds a new projectTag';
  }

  findAll() {
    return `This action returns all projectTags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectTag`;
  }

  update(id: number, updateProjectTagDto: UpdateProjectTagDto) {
    return `This action updates a #${id} projectTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectTag`;
  }
}
