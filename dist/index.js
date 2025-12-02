import { app } from "./src/app.js";
import dotenv from 'dotenv';
dotenv.config();
export default app;
const PORT = process.env.PORT || "3000";
app.listen(3000, () => {
    console.log("Server running locally on port 3000");
});
//# sourceMappingURL=index.js.map