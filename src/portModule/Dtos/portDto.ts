export class PortDto{
    constructor(portNumber:number,portName:string,portDescription:string){
        this.portNumber=portNumber
        this.portName=portName
        this.portDescription=portDescription
    }
    portNumber:number
    portName:string
    portDescription:string
}