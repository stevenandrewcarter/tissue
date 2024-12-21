"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tissue {
    cell(name, command, callback) {
        console.log(`Running cell ${name} with command: ${command.cmd} ${command.args}`);
        const { exec } = require('child_process');
        exec(`${command.cmd} ${command.args}`, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            callback(stdout);
        });
    }
}
exports.default = Tissue;
//# sourceMappingURL=tissue.js.map