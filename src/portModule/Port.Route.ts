import { Router } from "express";
import { portController } from "./Port.Controller.js";

export const portRoutes=Router();

portRoutes.get("/",portController.GetAllPorts)
portRoutes.get("/:portNumber",portController.GetPortByPortNumber)