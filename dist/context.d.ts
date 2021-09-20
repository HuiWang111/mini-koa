/// <reference types="node" />
import { Response } from './response';
import { Request } from './request';
import { IncomingMessage, ServerResponse } from 'http';
export declare class Context {
    private _request;
    private _response;
    private _req;
    private _res;
    constructor(request: Request, response: Response, req: IncomingMessage, res: ServerResponse);
    get request(): Request;
    get response(): Response;
    get req(): IncomingMessage;
    get res(): ServerResponse;
    set body(body: any);
}
