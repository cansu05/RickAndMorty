"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useFilterStore, useSyncFiltersWithURL } from "@/utils/store";

const statuses: Array<"alive" | "dead" | "all"> = ["alive", "dead", "all"];
const genders: Array<"male" | "female" | "genderless" | "all"> = [
  "male",
  "female",
  "genderless",
  "all",
];

export default function Filters() {
  useSyncFiltersWithURL();
  const { status, gender, setFilter } = useFilterStore();

  return (
    <div className="flex gap-4 p-4">
      <Select
        value={status}
        onValueChange={(value: string) => setFilter("status", value)}
      >
        <SelectTrigger className="w-[200px]">Status: {status}</SelectTrigger>
        <SelectContent>
          {statuses.map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select
        value={gender}
        onValueChange={(value: string) => setFilter("gender", value)}
      >
        <SelectTrigger className="w-[200px]">Gender: {gender}</SelectTrigger>
        <SelectContent>
          {genders.map((gender) => (
            <SelectItem key={gender} value={gender}>
              {gender}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
