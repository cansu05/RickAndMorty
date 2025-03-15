import { create } from "zustand";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface FilterState {
  status: string;
  gender: string;
  page: number;
  setFilter: (key: "status" | "gender", value: string) => void;
  setPage: (page: number) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  status: "all",
  gender: "all",
  page: 1,
  setFilter: (key, value) =>
    set((state) => ({
      ...state,
      [key]: value,
    })),
  setPage: (page) => set({ page }),
  resetFilters: () =>
    set({
      status: "all",
      gender: "all",
      page: 1,
    }),
}));

export const useSyncFiltersWithURL = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { status, gender, page, setFilter, setPage } = useFilterStore();

  useEffect(() => {
    const statusParam = searchParams.get("status") || "all";
    const genderParam = searchParams.get("gender") || "all";
    const pageParam = searchParams.get("page")
      ? Number(searchParams.get("page"))
      : 1;

    setFilter("status", statusParam);
    setFilter("gender", genderParam);
    setPage(pageParam);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();

    if (status !== "all") params.set("status", status);
    if (gender !== "all") params.set("gender", gender);
    if (page !== 1) params.set("page", String(page));

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, [status, gender, page]);
};
