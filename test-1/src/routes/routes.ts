import express from "express";
import { getTopRepositoriesController } from "../controllers/github.controller";

const router = express.Router();

router.get("/", getTopRepositoriesController);

export default router;
