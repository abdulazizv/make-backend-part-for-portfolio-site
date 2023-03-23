import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
import { FilesModule } from '../files/files.module';
@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),FilesModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
