export interface IPrayer {
    id: number;
    columnId: number;
    title: string;
    description: string;
    checked: boolean;
    commentIds: number[];
    key?:string;
}

export interface IUpdatePrayer {
    id: number;
    title: string;
    description: string;
    checked: boolean;
}

export interface IAddPrayer {
    values: IPrayer;
    columnId: number;
}