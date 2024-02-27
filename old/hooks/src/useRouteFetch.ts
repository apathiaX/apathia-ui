import { reactive, toRaw, watch } from 'vue'
import {
  LocationQuery,
  RouteLocationNormalizedLoaded,
  onBeforeRouteLeave,
  useRoute,
  useRouter,
} from 'vue-router'
import { cloneDeep } from 'lodash-es'

type MergeType<T, S> = {
  [K in keyof T]: K extends keyof S ? S[K] : T[K]
}

export function baseMerge<
  T extends Record<string, any>,
  S extends Record<string, any>
>(obj: T = {} as T, source: S, nullSafe = false): MergeType<T, S> {
  if (source == null) {
    return obj
  }
  const result = {} as MergeType<T, S>

  Object.keys(obj).forEach((key) => {
    let val = source[key]
    const useObjVal = nullSafe ? val == null : val === undefined
    if (useObjVal) {
      val = obj[key]
    }
    result[key as keyof T] = cloneDeep(val)
  })
  return result
}

// export function baseMergeDeep(defaultVal = {}, srcValue) {
//   if (srcValue == null) {
//     return defaultVal
//   }
//   const result = {}
//   // ObjectLike 包含数组
//   if (isArray(defaultVal)) {
//     const defaultElem = defaultVal[0]
//     return srcValue.map((val) => {
//       return baseMergeDeep(defaultElem, val)
//     })
//   }
//   Object.keys(defaultVal).forEach((key) => {
//     let val = srcValue[key]
//     if (val == null) {
//       val = defaultVal[key]
//     } else if (isObjectLike(val)) {
//       result[key] = baseMergeDeep(defaultVal[key], val)
//       return
//     }
//     result[key] = cloneDeep(val)
//   })
//   return result
// }

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
export function useRouteFetch(
  filter: Record<string, any>,
  fetchData: (r: RouteLocationNormalizedLoaded) => any,
  reduceFilter: (key: string, val: any) => any
) {
  const router = useRouter()
  const route = useRoute()

  const reactiveFilter = reactive(baseMerge(filter, route.query))

  const stopWatch = watch(
    () => [route.query, route.params],
    ([query]) => {
      updateFilter(query, reactiveFilter, reduceFilter)
      fetchData(route)
    },
    { immediate: true }
  )

  onBeforeRouteLeave(() => {
    stopWatch()
  })

  function setQuery(query = {}) {
    const pushRoute = {
      path: route.path,
      query: {
        ...query,
        r: new Date().valueOf(),
      },
    }
    router.push(pushRoute)
  }

  function refetch() {
    fetchData(route)
  }

  function resetFilter() {
    Object.keys(filter).forEach((key) => {
      reactiveFilter[key] = filter[key]
    })
  }

  return {
    filter: reactiveFilter,
    setQuery,
    route,
    refetch,
    resetFilter,
    stopWatch,
  }
}

function updateFilter(
  query: LocationQuery,
  filter: Record<string, any>,
  reduceFilter: (key: string, val: any) => any
) {
  if (query == null) {
    return
  }
  Object.keys(toRaw(filter)).forEach((key) => {
    const val = query[key] == null ? filter[key] : query[key]
    if (reduceFilter) {
      filter[key] = reduceFilter(key, val)
    } else {
      filter[key] = val
    }
  })
}
