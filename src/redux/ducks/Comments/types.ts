export interface IComment {
  id: number;
  body: string;
  created: string;
  prayerId: string;
  userId: string;
}

export interface IAddComment {
  values: {
    body: string;
  };
  prayerId: string;
}
