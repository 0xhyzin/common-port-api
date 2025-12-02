import { type Request, type Response } from "express";
declare class PortController {
    GetAllPorts(req: Request, res: Response): Promise<void>;
    GetPortByPortNumber(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export declare const portController: PortController;
export {};
//# sourceMappingURL=Port.Controller.d.ts.map