export interface IColumn {
  id: number;
  title: string;
  description: string;
  userId: number;
}

export interface IAddColumn {
  title: string;
  description: string;
}

export interface IUpdateColumn {
  values: IAddColumn;
  columnId: number;
}
