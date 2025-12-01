import { app } from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config();

module.exports = app;

const PORT :string =process.env.PORT || "3000";

if (require.main === module) {
    app.listen(3000, () => {
        console.log("Server running locally on port 3000");
    });
}
