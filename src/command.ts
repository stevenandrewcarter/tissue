import Cell from "./cell";
import Host from "./host";

export default class Command implements Cell {
    cmd: string;
    args: string;
    constructor(cmd: string, args: string) {
        this.cmd = cmd;
        this.args = args;
    }

    Execute(host: Host): void {
        host.Execute(this.cmd, this.args);
    }
}
