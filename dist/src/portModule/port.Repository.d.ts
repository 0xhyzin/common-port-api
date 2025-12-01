import { type Port } from "../db/Modules/Port.js";
declare class PortRepository {
    GetPortFromDatabase(): Promise<Port[]>;
    GetPortByPortNumber(portNumber: number): Promise<Port[]>;
}
export declare const portRepository: PortRepository;
export {};
//# sourceMappingURL=port.Repository.d.ts.map