import {Client} from 'ssh2';

export default class Host {
    private client: Client;

    constructor() {
        this.client = new Client();
    }

    Execute(cmd: string, args: string) {
        this.client.on('ready', () => {
            this.client.exec(`${cmd} ${args}`, (err, stream) => {
                if (err) throw err;
                stream.on('close', (code: number, signal: null) => {
                    console.log(`Stream :: close :: code: ${code}, signal: ${signal}`);
                    this.client.end();
                }).on('data', (data: object) => {
                    console.log(`STDOUT: ${data}`);
                }).stderr.on('data', (data) => {
                    console.log(`STDERR: ${data}`);
                });
            });
        }).connect({
            host: 'localhost',
            port: 22,
            // username: 'foo',
            // password: 'bar'
        });
    }
}