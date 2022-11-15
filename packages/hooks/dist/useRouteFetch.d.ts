import { LocationQuery, RouteLocationNormalizedLoaded } from 'vue-router';
declare type MergeType<T, S> = {
    [K in keyof T]: K extends keyof S ? S[K] : T[K];
};
export declare function baseMerge<T extends Record<string, any>, S extends Record<string, any>>(obj: T | undefined, source: S, nullSafe?: boolean): MergeType<T, S>;
/**
 * @name useRouteFetch
 * @param {*} query 页面搜索栏的表单
 * @param {*} fetchData 取数据函数 fetchData(route): any
 * @param {*} reduceFilter 处理特殊字段 reduceFilter(key: string, value: typeof query[key]): typeof query[key]
 * @returns {reactiveFilter, setQuery, route, resetFilter }
 * filter为响应式的filter
 * setQuery为设置query的函数
 * route是当前的vue-router 路由
 * refetch用于重新按当前query发请求
 * resetFilter用来将filter设置为初始状态
 */
export declare function useRouteFetch(filter: Record<string, any>, fetchData: (r: RouteLocationNormalizedLoaded) => any, reduceFilter: (key: string, val: any) => any): {
    filter: MergeType<Record<string, any>, LocationQuery>;
    setQuery: (query?: {}) => void;
    route: RouteLocationNormalizedLoaded;
    refetch: () => void;
    resetFilter: () => void;
    stopWatch: import("vue").WatchStopHandle;
};
export {};
