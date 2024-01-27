import { Request, Response } from "express";
import { getTopRepositories } from "../services/github.service";

export async function getTopRepositoriesController(
  req: Request,
  res: Response
): Promise<void> {
  const topRepositories = await getTopRepositories("google");
  res.json(topRepositories);
}
