import { PortDto } from "./Dtos/portDto.js";
import { portRepository } from "./port.Repository.js";
class PortService {
    async GetAllPortList() {
        let ports = [];
        try {
            ports = await portRepository.GetPortFromDatabase();
        }
        catch (err) {
            console.log(err);
        }
        const portsDto = ports.map(i => {
            return {
                portNumber: i.portNumber,
                portName: i.portName,
                portDescription: i.portDescription,
            };
        });
        return portsDto;
    }
    async GetPortByPortNumber(portNumber) {
        let port = [];
        try {
            port = await portRepository.GetPortByPortNumber(portNumber);
            if (port.length === 0) {
                return null;
            }
        }
        catch (err) {
            console.log(err);
        }
        const portDto = {
            portNumber: port[0].portNumber,
            portName: port[0].portName,
            portDescription: port[0].portDescription,
        };
        return portDto;
    }
}
export const portService = new PortService();
//# sourceMappingURL=Port.Service.js.map