import { Module } from '@nestjs/common';
import { SocialService } from './social.service';
import { SocialController } from './social.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { Social, SocialSchema } from './schemas/social.schema';
import { FilesModule } from '../files/files.module';

@Module({
  imports:[MongooseModule.forFeature([{name:Social.name,schema:SocialSchema}]),FilesModule],
  controllers: [SocialController],
  providers: [SocialService]
})
export class SocialModule {}
