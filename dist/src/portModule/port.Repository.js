import { pool } from "../db/dbConnection.js";
import {} from "../db/Modules/Port.js";
class PortRepository {
    async GetPortFromDatabase() {
        const [result, fields] = await pool.query("SELECT * FROM Port");
        return result;
    }
    async GetPortByPortNumber(portNumber) {
        const [results, fields] = await pool.query("SELECT * FROM Port WHERE portNumber=?", [portNumber]);
        console.log(results);
        return results;
    }
}
export const portRepository = new PortRepository();
//# sourceMappingURL=port.Repository.js.map