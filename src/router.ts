import { Middleware, Dispatch, RouterCallback } from './interface';
import { Context } from './context';

export class Router {
    private _methods: string[];
    private _callbacks: Map<string, RouterCallback[]>;

    constructor() {
        this._methods = [
            'GET',
            'PUT',
            'PATCH',
            'POST',
            'DELETE'
        ];

        this._callbacks = new Map();
    }

    public async get(url: string, callback: RouterCallback): Promise<void> {
        const key = `GET ${url}`;
        let callbacks: RouterCallback[] | undefined = this._callbacks.get(key);

        if (!callbacks) {
            callbacks = [];
        }

        callbacks.push(callback);
    }

    public async post(url: string, callback: RouterCallback): Promise<void> {
        const key = `POST ${url}`;
        let callbacks: RouterCallback[] | undefined = this._callbacks.get(key);

        if (!callbacks) {
            callbacks = [];
        }

        callbacks.push(callback);
    }

    public async patch(url: string, callback: RouterCallback): Promise<void> {
        const key = `PATCH ${url}`;
        let callbacks: RouterCallback[] | undefined = this._callbacks.get(key);

        if (!callbacks) {
            callbacks = [];
        }

        callbacks.push(callback);
    }

    public async put(url: string, callback: RouterCallback): Promise<void> {
        const key = `PUT ${url}`;
        let callbacks: RouterCallback[] | undefined = this._callbacks.get(key);

        if (!callbacks) {
            callbacks = [];
        }

        callbacks.push(callback);
    }

    public async delete(url: string, callback: RouterCallback): Promise<void> {
        const key = `DELETE ${url}`;
        let callbacks: RouterCallback[] | undefined = this._callbacks.get(key);

        if (!callbacks) {
            callbacks = [];
        }

        callbacks.push(callback);
    }

    public routes(): Middleware {
        return async (ctx: Context, next: Dispatch): Promise<void> => {
            const { url, method } = ctx.request;

            const key = `${method} ${url}`;
            const callbacks = this._callbacks.get(key);

            if (!callbacks) {
                return;
            }

            callbacks.forEach(cb => cb(ctx));

            await next();
        }
    }
}