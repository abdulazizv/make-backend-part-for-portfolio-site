import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TagsModule } from './tags/tags.module';
import { PostsModule } from './posts/posts.module';
import { SocialModule } from './social/social.module';
import { WorkModule } from './work/work.module';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}),
  MongooseModule.forRoot(process.env.MONGO_URI),
  UserModule,
  TagsModule,
  PostsModule,
  SocialModule,
  WorkModule,
  ProjectModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
