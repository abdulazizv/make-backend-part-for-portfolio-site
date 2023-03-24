import { Module } from '@nestjs/common';
import { PostTagService } from './post_tag.service';
import { PostTagController } from './post_tag.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostTag, PostTagSchema } from './schemas/post_tag.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:PostTag.name,schema:PostTagSchema}])],
  controllers: [PostTagController],
  providers: [PostTagService]
})
export class PostTagModule {}
