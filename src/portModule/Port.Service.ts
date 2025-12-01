import type { Port } from "../db/Modules/Port.js";
import { PortDto } from "./Dtos/portDto.js";
import { portRepository } from "./port.Repository.js";

class PortService {
    public async GetAllPortList() :Promise<PortDto[]> {
        let ports: Port[] = []
        try {
            ports =await portRepository.GetPortFromDatabase()
        } catch (err) {
            console.log(err)
        }
        const portsDto: PortDto[] = ports.map(i => {
            return {
                portNumber: i.portNumber,
                portName: i.portName,
                portDescription: i.portDescription,
            }
        })
        return portsDto
    }
    public async GetPortByPortNumber(portNumber:number):Promise<PortDto|null>{
        let port: Port[]=[]
        try {
            port=await portRepository.GetPortByPortNumber(portNumber)
            if(port.length===0){
                return null
            }

        } catch (err) {
            console.log(err)
        }
        const portDto: PortDto={
            portNumber:port[0]!.portNumber,
            portName:port[0]!.portName,
            portDescription:port[0]!.portDescription,
        }
        return portDto
    }
}
export const portService = new PortService();