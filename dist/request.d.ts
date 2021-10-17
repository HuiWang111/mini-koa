/// <reference types="node" />
import { IncomingMessage, IncomingHttpHeaders } from 'http';
export declare class Request {
    private _req;
    constructor(req: IncomingMessage);
    get req(): IncomingMessage;
    get headers(): IncomingHttpHeaders;
    set headers(val: IncomingHttpHeaders);
    get url(): string | undefined;
    set url(val: string | undefined);
    get method(): string | undefined;
    set method(val: string | undefined);
    get path(): string | null;
    set path(path: string | null);
    get querystring(): string;
    set querystring(str: string);
    get search(): string;
    set search(str: string);
}
