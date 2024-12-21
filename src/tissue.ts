export default class Tissue {
    cell(name: string, command: any, callback: any) {
        console.log(`Running cell ${name} with command: ${command.cmd} ${command.args}`);
        const { exec } = require('child_process');
        exec(`${command.cmd} ${command.args}`, (err: any, stdout: any, stderr: any) => {
            if (err) {
                console.error(err);
                return;
            }
            callback(stdout);
        });
    }
}