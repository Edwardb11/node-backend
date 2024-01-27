import axios, { AxiosResponse, AxiosError } from "axios";

interface Repository {
  stargazers_count: number;
}

export async function getTopRepositories(
  username: string
): Promise<Repository[]> {
  try {
    const githubApiUrl = `https://api.github.com/users/${username}/repos`;
    const config = { headers: { "User-Agent": "github-api-app" } };

    const response: AxiosResponse<Repository[]> = await axios.get(
      githubApiUrl,
      config
    );

    return response.data
      .sort(
        (a: Repository, b: Repository) =>
          b.stargazers_count - a.stargazers_count
      )
      .slice(0, 10);
  } catch (error) {
    throw handleError(error as AxiosError);
  }
}

function handleError(error: AxiosError): Error {
  console.error(
    "Error al obtener los repositorios:",
    error.response ? error.response.data : error.message
  );
  return new Error("Error al obtener los repositorios");
}
