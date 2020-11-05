export interface RequestResponse<T> {
    data: Blocks<T>[];
    error?: string;
}

export interface Blocks<T> {
    type: string;
    id: string;
    attributes: T;
}

