"use client";

import { useFilterStore } from "@/utils/store";
import { Button } from "@/components/ui/button";

export default function Pagination() {
  const { page, setPage } = useFilterStore();

  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <Button
        onClick={() => setPage(page - 1)}
        disabled={page <= 1}
        variant="outline"
      >
        Previous
      </Button>
      <span className="text-muted-foreground font-semibold text-center">
        {page}
      </span>
      <Button onClick={() => setPage(page + 1)} variant="outline">
        Next
      </Button>
    </div>
  );
}
