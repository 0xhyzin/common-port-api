import { app } from "./src/app.js";
import dotenv from 'dotenv';

dotenv.config();

export default app;

const PORT: string = process.env.PORT || "3000";

app.listen(3000, () => {
    console.log("Server running locally on port 3000");
});
