import CharactersContainer from "@/components/CharactersContainer";
import { getCharacters } from "@/lib/api";

interface SearchParams {
  [key: string]: string | undefined;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const resolvedSearchParams = await searchParams;

  const filters = {
    status: resolvedSearchParams.status || "",
    gender: resolvedSearchParams.gender || "",
    page: resolvedSearchParams.page ? Number(resolvedSearchParams.page) : 1,
  };

  try {
    const data = await getCharacters(filters);

    return <CharactersContainer characters={data} filters={filters} />;
  } catch (error) {
    console.error("Error fetching characters:", error);

    return (
      <p className="text-red-500 text-center p-4">
        Failed to load characters. Please try again later.
      </p>
    );
  }
}
