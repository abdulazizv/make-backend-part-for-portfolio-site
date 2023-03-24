import { Module } from '@nestjs/common';
import { ProjectTagsService } from './project_tags.service';
import { ProjectTagsController } from './project_tags.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectTag, ProjectTagSchema } from './schemas/project_tag.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:ProjectTag.name,schema:ProjectTagSchema}])],
  controllers: [ProjectTagsController],
  providers: [ProjectTagsService]
})
export class ProjectTagsModule {}
