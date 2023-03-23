import { Injectable,HttpException,HttpStatus } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const newUser = await this.prismaService.user.create({
      data:{
      email: createUserDto.email,
      password: createUserDto.password,
      full_name: createUserDto.full_name,
      phone_number: createUserDto.phone_number,
      cv_link: createUserDto.cv_link,
      birth_date: createUserDto.birth_date,
      address: createUserDto.address,
      photo: createUserDto.photo,
      }
    });
    if(newUser) {
      return newUser;
    }
    throw new HttpException(
      'Error has been detected during save information',
       HttpStatus.BAD_GATEWAY
    )

  }

  async findAll() {
    
  }

  async findOne(id: number): Promise<User[]> {
    const allUsers = await this.prismaService.user.findMany();
    if(allUsers.length >= 1)
      return allUsers;
    throw new HttpException(
      'Database not found',
      HttpStatus.NOT_FOUND
    )
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.prismaService.user.update({
      where:{id},
      data:{
        ...updateUserDto
      }
    });
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.prismaService.user.delete({
      where:{id}
    })
    return deletedUser;
  }
}
