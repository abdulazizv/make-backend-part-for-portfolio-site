import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import {InjectModel} from '@nestjs/mongoose';
import { Tag, TagDocument } from './schemas/tag.schema';
import { Model } from 'mongoose';
import { User } from '../user/schemas/user.schema';
@Injectable()
export class TagsService {
  constructor(@InjectModel(Tag.name) private tagModule: Model<TagDocument>){}

  async create(createTagDto: CreateTagDto): Promise<Tag> {
    return await this.tagModule.create(createTagDto);
  }

  async findAll(): Promise<Tag[]>{
    const allTags = await this.tagModule.find().exec()
    if(allTags.length >= 1) {
      return allTags
    }
    throw new HttpException(
      'Information not found!',
      HttpStatus.NO_CONTENT
    )
  }

  async findOne(id: string): Promise<Tag> {
    return await this.tagModule.findById(id);
  }

  async update(id: string, updateTagDto: UpdateTagDto): Promise<Tag> {
    const updatedTag = await this.tagModule.findByIdAndUpdate({_id: id},updateTagDto)
    return updatedTag;

  }

  async remove(id: string): Promise<Boolean> {
    const deletedTag = await this.tagModule.findByIdAndDelete(id);
    return true;
  }
}
