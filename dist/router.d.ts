import { Middleware, RouterCallback } from './interface';
export declare class Router {
    private _methods;
    private _callbacks;
    constructor();
    get(url: string, callback: RouterCallback): Promise<void>;
    post(url: string, callback: RouterCallback): Promise<void>;
    patch(url: string, callback: RouterCallback): Promise<void>;
    put(url: string, callback: RouterCallback): Promise<void>;
    delete(url: string, callback: RouterCallback): Promise<void>;
    routes(): Middleware;
}
