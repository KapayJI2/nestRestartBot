import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestartModule } from './restart/restart.module';
import { ConfigModule } from '@nestjs/config';
import { BotService } from './bot/bot.service';

@Module({
  imports: [ConfigModule.forRoot(), RestartModule],
  controllers: [AppController],
  providers: [AppService, BotService],
})
export class AppModule {}
