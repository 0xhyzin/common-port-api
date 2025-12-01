import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();
export const pool = await mysql.createPool({
    port: Number(process.env.AIVEN_PORT),
    host: process.env.AIVEN_HOST,
    user: process.env.AIVEN_NAME,
    password: process.env.AIVEN_PASSWORD,
    database: process.env.AIVEN_DATABASENAME,
    ssl: {
        rejectUnauthorized: false
    },
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
//# sourceMappingURL=dbConnection.js.map