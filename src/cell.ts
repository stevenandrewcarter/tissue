import Host from "./host";

export default interface Cell {
    Execute(host: Host): void;
}