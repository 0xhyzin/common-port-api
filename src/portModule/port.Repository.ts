import { pool } from "../db/dbConnection.js";
import {type Port } from "../db/Modules/Port.js";

class PortRepository{
    public async GetPortFromDatabase():Promise<Port[] >{
        const [result,fields]= await pool.query("SELECT * FROM Port")
        return result as Port[]
    }
    public async GetPortByPortNumber(portNumber:number):Promise<Port[]>{
        const [results,fields]=await pool.query("SELECT * FROM Port WHERE portNumber=?",[portNumber]);
        console.log(results)
        return results as Port[]
    }
}
export const portRepository=new PortRepository();