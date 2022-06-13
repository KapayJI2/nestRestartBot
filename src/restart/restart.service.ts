import { Injectable } from '@nestjs/common';
import {execFileSync, exec, execSync} from 'child_process';

@Injectable()
export class RestartService {
    async restartServer(){
        execFileSync('kill_test.cmd',null,{cwd:process.env.ROOT_DIR})
        execFileSync('startserver.bat',null,{cwd:process.env.ROOT_DIR})
    }
}
