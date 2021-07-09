export function compose(middlewares) {
    if (!Array.isArray(middlewares)) {
        Promise.reject(new Error('middlewares must be an array'));
    }
    for (const middleware of middlewares) {
        if (typeof middleware !== 'function') Promise.reject(new Error('middleware must be function'));
    }

    return (ctx) => {
        return dispatch(0);

        function dispatch(i) {
            const fn = middlewares[i];
            if (!fn) return Promise.resolve();

            try {
                return Promise.resolve(fn(ctx, dispatch.bind(null, i + 1)));
            } catch (e) {
                return Promise.reject(e);
            }
        }
    }
}