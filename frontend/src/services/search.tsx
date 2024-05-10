import { type ApiSearchResponse, type Data } from "../types";

export const searchData = async (
  search: string
): Promise<[Error | null, Data?]> => {
  try {
    const res = await fetch(`http://localhost:3000/api/users?q=${search}`, {
      method: "GET",
    });

    if (!res.ok) return [new Error(`Error searching data: ${res.statusText}`)];

    const json = (await res.json()) as ApiSearchResponse;

    return [null, json.data];
  } catch (error) {
    if (error instanceof Error) return [error];
  }

  return [new Error("Unknwon Error")];
};
