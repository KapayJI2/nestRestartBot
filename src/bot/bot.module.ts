import { Global, Module } from '@nestjs/common';
import { RestartModule } from 'src/restart/restart.module';
import { BotService } from './bot.service';

@Global() //регистрируем модуль глобально, что бы он не стартовал дважды, из appModule его убираем из imports (я уже убрал)
@Module({
  providers: [BotService],
  imports: [RestartModule]
})
export class BotModule {}
