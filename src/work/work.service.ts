import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import {InjectModel} from '@nestjs/mongoose';
import { Work } from './schema/work.schema';
import { Model } from 'mongoose';
@Injectable()
export class WorkService {

  constructor(@InjectModel(Work.name) private workmodule: Model<Work>){}

  async create(createWorkDto: CreateWorkDto): Promise<Work> {
    return await this.workmodule.create(createWorkDto);
  }

  async findAll(): Promise<Work[]> {
    const allWork = await this.workmodule.find().exec();
    return allWork;
  }

  async findOne(id: string): Promise<Work> {
    const oneWork = await this.workmodule.findById(id);
    return oneWork;
  }

  async update(id: string, updateWorkDto: UpdateWorkDto): Promise<Work> {
    const updatedWork = await this.workmodule.findByIdAndUpdate(id,updateWorkDto);
    return updatedWork;
  }

  async remove(id: string):Promise<Boolean> {
    await this.workmodule.findByIdAndDelete(id);
    return true;
  }
}
