import { PartialType } from '@nestjs/mapped-types';
import { CreatePostTagDto } from './create-post_tag.dto';

export class UpdatePostTagDto extends PartialType(CreatePostTagDto) {}
