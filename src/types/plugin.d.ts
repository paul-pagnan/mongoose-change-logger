import { Types, Mongoose } from 'mongoose';

export interface IChangeEvent {
    id: Types.ObjectId;
    action: string;
    modelName: string;
    stack: string;
    when: Date;
    actor: string;
}

export interface IParams {
    modelName: string;
    mongooseInstance: Mongoose;
    collection?: string;
    concurrentSaves?: number; // default to 10
}

export * from './types/mongoose';
