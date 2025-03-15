export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
}

export interface Filters {
  status?: string;
  gender?: string;
  page?: number;
}

export interface ApiResponse {
  results: Character[];
}
