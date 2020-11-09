import { Member } from 'src/app/shared/models/member';

export interface RequestResponse<T> {
    data: Blocks<T>[];
    error?: string;
}

export interface Blocks<T> {
    type: string;
    id: string;
    attributes: T;
}

export interface OurTeamSection {
    title: string;
    members: Member[];
}
