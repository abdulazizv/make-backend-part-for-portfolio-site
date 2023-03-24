import { PartialType } from '@nestjs/mapped-types';
import { CreatePostTagDto } from './create-post_tag.dto';

export class UpdatePostTagDto extends PartialType(CreatePostTagDto) {
    readonly tag_id?: string;
    readonly post_id?: string;
}
