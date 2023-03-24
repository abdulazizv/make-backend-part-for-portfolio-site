import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTagDto } from './create-project_tag.dto';

export class UpdateProjectTagDto extends PartialType(CreateProjectTagDto) {}
