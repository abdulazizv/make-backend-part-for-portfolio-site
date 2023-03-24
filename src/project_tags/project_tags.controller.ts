import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectTagsService } from './project_tags.service';
import { CreateProjectTagDto } from './dto/create-project_tag.dto';
import { UpdateProjectTagDto } from './dto/update-project_tag.dto';

@Controller('project-tags')
export class ProjectTagsController {
  constructor(private readonly projectTagsService: ProjectTagsService) {}

  @Post()
  create(@Body() createProjectTagDto: CreateProjectTagDto) {
    return this.projectTagsService.create(createProjectTagDto);
  }

  @Get()
  findAll() {
    return this.projectTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectTagDto: UpdateProjectTagDto) {
    return this.projectTagsService.update(+id, updateProjectTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectTagsService.remove(+id);
  }
}
