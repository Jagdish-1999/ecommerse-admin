export interface EachCategoryType {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  data: EachCategoryType[] | null;
  isLoading: boolean;
}

export interface CreateCategoryPayload {
  name: string;
}
