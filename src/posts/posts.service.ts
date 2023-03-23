import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import {InjectModel} from '@nestjs/mongoose';
import { Post } from './schemas/post.schema';
import { Model } from 'mongoose';
@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModule: Model<Post>){}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = await this.postModule.create(createPostDto);
    return newPost;
  }

  async findAll(): Promise<Post[]> {
    const allPosts = await this.postModule.find().exec()
    if(allPosts.length >= 1) {
      return allPosts;
    }
    throw new HttpException(
      'Database is empty, Information not found',
      HttpStatus.NOT_FOUND
    )
  }

  async findOne(id: string): Promise<Post> {
    const onePost = await this.postModule.findById(id);
    return onePost;
  }

  async update(id: string, updatePostDto: UpdatePostDto):Promise<Post> {
    const updatedPost = await this.postModule.findByIdAndUpdate(id,updatePostDto);
    return updatedPost;
  }

  async remove(id: string): Promise<Boolean> {
    const deletedPost = await this.postModule.findByIdAndDelete(id);
    return true;
  }
}
