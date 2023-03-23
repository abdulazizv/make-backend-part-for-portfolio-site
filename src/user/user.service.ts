import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectModel} from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { FilesService } from '../files/files.service';
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModule: Model<UserDocument>,
    private readonly fileService: FilesService
  ) {}

  async create(createUserDto: CreateUserDto,photo:string) {
    const fileName = await this.fileService.createFile(photo);
    createUserDto.photo = fileName
    const newUser = await this.userModule.create(createUserDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userModule.find().exec();
    console.log(allUsers)
    if(allUsers.length >= 1) {
      return allUsers;
    }
    throw new HttpException(
      'Database not found! Maybe something is deleted',
      HttpStatus.NO_CONTENT
    )
  }

  async findOne(id: string): Promise<User> {
    const oneUser = await this.userModule.findById(id);
    if(oneUser){
      return oneUser;
    }else {
      throw new HttpException(
        'ID is incorrect',
        HttpStatus.NOT_FOUND
      )
    }

  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<User> {
    const updatedUser = await this.userModule.findByIdAndUpdate({_id: id},updateUserDto);
    return updatedUser
  }

  async remove(id: string): Promise<Boolean> {
    const response = await this.userModule.findByIdAndDelete({_id:id});
    return true;
  }
}
