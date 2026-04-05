// authorModel.ts

export interface Author {
  id: number;
  name: string;
  email: string;
}

export function createAuthor(id: number, name: string, email: string): Author {
  return { id, name, email };
}
