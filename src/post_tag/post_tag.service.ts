import { Injectable } from '@nestjs/common';
import { CreatePostTagDto } from './dto/create-post_tag.dto';
import { UpdatePostTagDto } from './dto/update-post_tag.dto';

@Injectable()
export class PostTagService {
  create(createPostTagDto: CreatePostTagDto) {
    return 'This action adds a new postTag';
  }

  findAll() {
    return `This action returns all postTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postTag`;
  }

  update(id: number, updatePostTagDto: UpdatePostTagDto) {
    return `This action updates a #${id} postTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} postTag`;
  }
}
