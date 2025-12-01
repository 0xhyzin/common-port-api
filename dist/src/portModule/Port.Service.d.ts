import { PortDto } from "./Dtos/portDto.js";
declare class PortService {
    GetAllPortList(): Promise<PortDto[]>;
    GetPortByPortNumber(portNumber: number): Promise<PortDto | null>;
}
export declare const portService: PortService;
export {};
//# sourceMappingURL=Port.Service.d.ts.map