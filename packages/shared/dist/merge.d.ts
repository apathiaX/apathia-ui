export declare function mergeWithDefault<T extends Record<string, any>, U extends Record<string, any>>(defaultValue: T, source?: U): {
    [P in keyof T]: P extends keyof U ? U[P] : T[P];
};
