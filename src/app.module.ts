import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [ConfigModule.forRoot({envFilePath:'.env', isGlobal:true}),
  MongooseModule.forRoot(process.env.MONGO_URI),
  UserModule,
  TagsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
