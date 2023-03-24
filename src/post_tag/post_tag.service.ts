import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePostTagDto } from './dto/create-post_tag.dto';
import { UpdatePostTagDto } from './dto/update-post_tag.dto';
import { PostTag } from './schemas/post_tag.schema';

@Injectable()
export class PostTagService {
  constructor(@InjectModel(PostTag.name) private postTagModule: Model<PostTag>){ }

  async create(createPostTagDto: CreatePostTagDto): Promise<PostTag> {
    const newPostTag = await this.postTagModule.create(createPostTagDto);
    return newPostTag;
  }

  async findAll(): Promise<PostTag[]> {
    const allPostTag = await this.postTagModule.find().populate('tag_id').populate('post_id');
    return allPostTag;
  }

  async findOne(id: string):Promise<PostTag> {
    const onePostTag = await this.postTagModule.findById(id).populate('tag_id').populate('post_id');
    return onePostTag;
  }

  async update(id: string, updatePostTagDto: UpdatePostTagDto): Promise<PostTag> {
    const updatedPostTag = await this.postTagModule.findByIdAndUpdate(id,updatePostTagDto);
    return updatedPostTag;
  }

  async remove(id: string): Promise<Boolean> {
    await this.postTagModule.findByIdAndDelete(id);
    return true;
  }
}
