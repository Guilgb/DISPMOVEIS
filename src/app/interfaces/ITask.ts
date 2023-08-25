import type { Types } from 'mongoose';

export interface TaskResponse {
    _id?: Types.ObjectId;
    text: String;
    completed: boolean;
}
