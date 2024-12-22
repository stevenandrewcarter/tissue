import Tissue from '../src/tissue';

const tissue = new Tissue();
tissue.cell('shell', {cmd: 'echo', args: 'Hello World!'}, (res: object) => {
    console.log(res);
    return;
})