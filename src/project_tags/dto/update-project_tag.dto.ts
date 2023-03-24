import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectTagDto } from './create-project_tag.dto';

export class UpdateProjectTagDto extends PartialType(CreateProjectTagDto) {
    readonly project_id?: string;
    readonly tag_id?: string;
}
