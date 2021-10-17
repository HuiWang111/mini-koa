import { Context } from './context';
export declare type Dispatch = () => (index: number) => Promise<Middleware>;
export declare type Middleware = (ctx: any, next: Dispatch) => Promise<void>;
export declare type RouterCallback = (ctx: Context) => Promise<void>;
