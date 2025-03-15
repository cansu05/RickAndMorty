import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Character } from "@/type";

interface CharactersListProps {
  characters: Character[];
}

export default function CharactersList({ characters }: CharactersListProps) {
  return (
    <div className="grid grid-cols-4 gap-4 p-6">
      {characters.map((character) => (
        <Card key={character.id}>
          <CardContent>
            <div className="relative h-64 md:h-48 rounded overflow-hidden">
              <Image
                src={character.image}
                alt={character.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                priority
                className="rounded w-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h2 className="text-xl font-semibold">{character.name}</h2>
            <p className="text-gray-500">
              {character.status} - {character.gender}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
