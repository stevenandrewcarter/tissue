import Cell from './cell';
import Host from './host';

export default class Tissue {
    private host: Host;
    
    constructor(host: Host) {
        this.host = host;
    }

    cell(name: string, cell: Cell) {
        console.log(`Running cell ${name}`);
        cell.Execute(this.host);
        return this;
    }
}