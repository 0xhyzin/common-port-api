import {} from "express";
import { portService } from "./Port.Service.js";
class PortController {
    async GetAllPorts(req, res) {
        const listOfPort = await portService.GetAllPortList();
        res.status(200).send(listOfPort);
    }
    async GetPortByPortNumber(req, res) {
        const portNumber = Number(req.params.portNumber);
        if (portNumber <= 0 && portNumber <= 65_535)
            return res.status(400).send({ message: "Port range from 0 to 65536", statusCode: 400 });
        const port = await portService.GetPortByPortNumber(portNumber);
        if (port == null) {
            return res.status(400).send({ message: "Port Not Found", statusCode: 400 });
        }
        return res.status(200).send({ message: port, statusCode: 200 });
    }
}
export const portController = new PortController();
//# sourceMappingURL=Port.Controller.js.map