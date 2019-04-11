import { Types, Mongoose } from 'mongoose';
interface IChangeEvent {
    id: Types.ObjectId;
    action: string;
    modelName: string;
    stack: string;
    when: Date;
    actor: string;
}

interface IParams {
    modelName: string;
    mongooseInstance: Mongoose;
    collection?: string;
    concurrentSaves?: number; // default to 10
}