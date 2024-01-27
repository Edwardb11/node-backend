import axios, { AxiosResponse, AxiosError } from "axios";

export async function getTopRepositories(username: string): Promise<any[]> {
  try {
    const githubApiUrl = `https://api.github.com/users/${username}/repos`;
    const config = { headers: { "User-Agent": "github-api-app" } };

    const response: AxiosResponse = await axios.get(githubApiUrl, config);

    return response.data
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
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
