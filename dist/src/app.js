import express, { json } from "express";
import { userRoutes } from "./userModule/User.Route.js";
import { portRoutes } from "./portModule/Port.Route.js";
export const app = express();
const mainPath = "/api/Level1/";
app.use(json());
app.use(`${mainPath}user`, userRoutes);
app.use(`${mainPath}port`, portRoutes);
//# sourceMappingURL=app.js.map