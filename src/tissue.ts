import { Cell } from './cell';

export default class Tissue {
    cell(name: string, cell: Cell) {
        console.log(`Running cell ${name}`);
        cell.Execute();
        return this;
    }
}