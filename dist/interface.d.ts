export declare type Dispatch = () => (index: number) => Promise<Middleware>;
export declare type Middleware = (ctx: any, next: Dispatch) => Promise<void>;
