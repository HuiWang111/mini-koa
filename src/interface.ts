export type Dispatch = () => (index: number) => Promise<Middleware>;

export type Middleware = (ctx: any, next: Dispatch) => Promise<void>;
