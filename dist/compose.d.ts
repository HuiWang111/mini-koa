import { Middleware } from './interface';
export declare function compose(middlewares: Middleware[]): (ctx: any) => Promise<Middleware | void>;
