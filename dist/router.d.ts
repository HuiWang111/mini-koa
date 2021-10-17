import { Middleware, RouterCallback } from './interface';
export declare class Router {
    private _methods;
    private _callbacks;
    constructor();
    get(path: string, callback: RouterCallback): Promise<void>;
    post(path: string, callback: RouterCallback): Promise<void>;
    patch(path: string, callback: RouterCallback): Promise<void>;
    put(path: string, callback: RouterCallback): Promise<void>;
    delete(path: string, callback: RouterCallback): Promise<void>;
    routes(): Middleware;
}
