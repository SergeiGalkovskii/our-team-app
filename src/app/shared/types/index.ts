export interface RequestResponse<T> {
    data: Blocks<T>[];
}

export interface Blocks<T> {
    type: string;
    id: string;
    attributes: T;
}

