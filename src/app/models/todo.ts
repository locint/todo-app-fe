import { DateTime } from 'luxon';

export interface Todo {
    _id: string;
    title: string;
    content: string;
    created: DateTime;
    hidden: boolean;
    deleted: boolean;
    progress: number;
}