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
    created: string;
    prayerId: number;
  };
  prayerId: string;
}
