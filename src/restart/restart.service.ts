import { Injectable } from '@nestjs/common';
import { execFileSync, execFile } from 'child_process';

@Injectable()
export class RestartService {
  async restartServer(PORT) {
    console.log(PORT);
    const port_num = PORT ?? '2302';
    try {
      await execFileSync('killtest.cmd', null, {
        cwd: process.env.ROOT_DIR,
      });

      execFile('startserver.bat', [`${port_num}`], {
        cwd: process.env.ROOT_DIR,
      });
      return `Сервер запущен на порту ${port_num}`;
    } catch (e) {
      return 'Ошибка запуска';
    }
  }
}
