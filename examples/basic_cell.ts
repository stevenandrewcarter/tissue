import Tissue from '../src/tissue';
import Command from '../src/command';

const tissue = new Tissue();
tissue.cell('shell', new Command('echo', 'Hello World!'));