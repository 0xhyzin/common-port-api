import {} from "express";
import { portService } from "./Port.Service.js";
import { json } from "stream/consumers";
class PortController {
    async GetAllPorts(req, res) {
        const listOfPort = await portService.GetAllPortList();
        res.status(200).send(listOfPort);
    }
    async GetPortByPortNumber(req, res) {
        const portNumber = Number(req.params.portNumber);
        if (portNumber <= 0 && portNumber <= 65_535)
            res.status(400).send({ message: "Port range from 0 to 65536", statusCode: 400 });
        const port = await portService.GetPortByPortNumber(portNumber);
        if (port == null) {
            res.status(400).send({ message: "Port Not Found", statusCode: 400 });
        }
        res.status(200).send(port);
    }
}
export const portController = new PortController();
//# sourceMappingURL=Port.Controller.js.map