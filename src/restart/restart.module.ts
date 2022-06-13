import { Module } from '@nestjs/common';
import { RestartService } from './restart.service';

@Module({
  providers: [RestartService],
  exports: [RestartService]
})
export class RestartModule {}
