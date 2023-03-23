import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Work, WorkSchema } from './schema/work.schema';
@Module({
  imports: [MongooseModule.forFeature([{name:Work.name,schema:WorkSchema}])],
  controllers: [WorkController],
  providers: [WorkService],
})
export class WorkModule {}
