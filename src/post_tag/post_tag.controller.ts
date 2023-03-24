import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostTagService } from './post_tag.service';
import { CreatePostTagDto } from './dto/create-post_tag.dto';
import { UpdatePostTagDto } from './dto/update-post_tag.dto';

@Controller('post-tag')
export class PostTagController {
  constructor(private readonly postTagService: PostTagService) {}

  @Post()
  create(@Body() createPostTagDto: CreatePostTagDto) {
    return this.postTagService.create(createPostTagDto);
  }

  @Get()
  findAll() {
    return this.postTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostTagDto: UpdatePostTagDto) {
    return this.postTagService.update(+id, updatePostTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postTagService.remove(+id);
  }
}
