import Tissue from '../src/tissue';
import Host from '../src/host';
import Command from '../src/command';

const tissue = new Tissue(new Host());
tissue.cell('shell', new Command('echo', 'Hello World!'));