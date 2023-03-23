import { Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Social } from './schemas/social.schema';
import { Model } from 'mongoose';
import { FilesService } from '../files/files.service';
@Injectable()
export class SocialService {

  constructor(@InjectModel(Social.name) private socialModule: Model<Social>,
  private readonly filesService:FilesService){}

  async create(createSocialDto: CreateSocialDto,icon:string): Promise<Social> {
    const iconfile = await this.filesService.createFile(icon);
    createSocialDto.icon = iconfile;
    const newSocial = await this.socialModule.create(createSocialDto);
    return newSocial;
  }

  async findAll():Promise<Social[]> {
    const allSocial = await this.socialModule.find().exec()
    return allSocial;
  }

  async findOne(id: string): Promise<Social> {
    const oneSocial = await this.socialModule.findById(id)
    return oneSocial;
  }

  async update(id: string, updateSocialDto: UpdateSocialDto): Promise<Social> {
    const updatedOne = await this.socialModule.findByIdAndUpdate(id,updateSocialDto);
    return updatedOne;
  }

  async remove(id: string): Promise<Boolean> {
    await this.socialModule.findByIdAndDelete(id);
    return true
  }
}
