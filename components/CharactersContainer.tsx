"use client";

import { useCharacters } from "@/lib/api";
import CharactersList from "./CharactersList";
import Filters from "./Filters";
import Pagination from "./Pagination";
import { Character, Filters as FiltersProps } from "@/type";

interface CharactersContainerProps {
  characters: Character[];
  filters: FiltersProps;
}

export default function CharactersContainer({
  characters,
  filters,
}: CharactersContainerProps) {
  const { data, error, isLoading } = useCharacters(filters, characters);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Filters />
      <CharactersList characters={data ?? []} />
      <Pagination />
    </>
  );
}
