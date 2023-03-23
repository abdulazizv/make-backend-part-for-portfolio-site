import { Module } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkController } from './work.controller';

@Module({
  controllers: [WorkController],
  providers: [WorkService]
})
export class WorkModule {}
