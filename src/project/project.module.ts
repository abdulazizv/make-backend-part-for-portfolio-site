import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, projectSchema } from './schemas/project.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Project.name,schema:projectSchema}])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule {}
