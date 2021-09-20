/// <reference types="node" />
import { ServerResponse, OutgoingHttpHeaders } from 'http';
export declare class Response {
    private _res;
    constructor(res: ServerResponse);
    get headers(): OutgoingHttpHeaders;
    get status(): number;
    set status(code: number);
    get message(): string;
    set message(msg: string);
}
