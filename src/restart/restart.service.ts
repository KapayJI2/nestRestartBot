import { Injectable } from '@nestjs/common';
import { execFileSync, exec, execSync } from 'child_process';

@Injectable()
export class RestartService {
  async restartServer(PORT) {
    console.log(PORT);
    const port_num = PORT ?? '2302';
    execFileSync('killtest.cmd', null, { cwd: process.env.ROOT_DIR });
    execFileSync('startserver.bat', [`${port_num}`], {
      cwd: process.env.ROOT_DIR,
    });
  }
}
