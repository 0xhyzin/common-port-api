import { type Request ,type Response} from "express";
import { portService } from "./Port.Service.js";
import { json } from "stream/consumers";

class PortController{
    public async GetAllPorts(req:Request,res:Response){
        const listOfPort=await portService.GetAllPortList()
        res.status(200).send(listOfPort)
    }
    public async GetPortByPortNumber(req:Request,res:Response){
        
        const portNumber=Number(req.params.portNumber)
        if(portNumber <=0 && portNumber <=65_535)
            res.status(400).send({message:"Port range from 0 to 65536",statusCode:400})
        const port=await portService.GetPortByPortNumber(portNumber)
        if(port==null){
            res.status(400).send({message:"Port Not Found",statusCode:400})
        }
        res.status(200).send({message:port,statusCode:200})
    }
}
export const portController=new PortController();