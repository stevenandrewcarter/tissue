import Cell from "./cell";
import { exec, ExecException } from 'child_process';

export default class Command implements Cell {
    cmd: string;
    args: string;
    constructor(cmd: string, args: string) {
        this.cmd = cmd;
        this.args = args;
    }

    Execute(): void {
        exec(`${this.cmd} ${this.args}`, (err: ExecException | null, stdout: string, stderr: string) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
            console.log(stderr);
        });
    }
}
