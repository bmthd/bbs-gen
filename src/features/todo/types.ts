export type Category = {
  id: string;
  name: string;
};

export type Todo = {
  id: string;
  title: string;
  content: string;
  isComplete: boolean;
  category?: Category;
  createdAt?: string;
};
