// Type definitions for mongo event logger
/// <reference types="mongoose" />

import * as mongoose from 'mongoose';

declare module "mongoose" {
    export interface Document {
        by(actor: any): this;
        __changeId?: Types.ObjectId;
        __actor?: any;
        __stack?: string;
        __logged?: boolean;
    }
    export interface Query<ResultType, DocType, THelpers> {
        __changeId?: Types.ObjectId;
        __actor?: any;
        __stack?: string;
        __logged?: boolean;
        by(actor: any): this;
    }
}
