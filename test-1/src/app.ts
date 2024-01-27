import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";

const app = express();
const port = 3000;

app.get("/repos", async (req: Request, res: Response) => {
  try {
    const githubApiUrl = "https://api.github.com/users/google/repos";

    const config = {
      headers: {
        "User-Agent": "github-api-app",
      },
    };

    const response: AxiosResponse = await axios.get(githubApiUrl, config);

    const topRepositories = response.data
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 10);

    res.json(topRepositories);
  } catch (error: any) {
    console.error(
      "Error al obtener los repositorios:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Error al obtener los repositorios" });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
