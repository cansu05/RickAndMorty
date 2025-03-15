import { useQuery } from "@tanstack/react-query";
import { Filters, ApiResponse } from "@/type";

export const getCharacters = async (
  filters: Filters
): Promise<ApiResponse["results"]> => {
  const queryParams = new URLSearchParams(filters as Record<string, string>);

  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?${queryParams}`,
    { cache: "no-store" }
  );

  if (!response.ok) throw new Error("Failed to fetch data!");

  const data: ApiResponse = await response.json();
  return data.results;
};

export const useCharacters = (
  filters: Filters,
  initialData?: ApiResponse["results"]
) => {
  return useQuery({
    queryKey: ["characters", filters],
    queryFn: () => getCharacters(filters),
    initialData,
  });
};
