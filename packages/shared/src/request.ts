/**
 * lite version from https://github.com/element-plus/element-plus/blob/dev/packages/upload/src/ajax.ts
 */

type Method = 'PUT' | 'POST' | 'PUT' | 'DELETE'

interface RequestOptions {
  headers?: Record<string, string>
  withCredentials?: boolean
  onProgress?: (e: UploadProgressEvent) => void
}

interface UploadProgressEvent extends ProgressEvent {
  percent: number
}
interface AjaxError extends Error {
  status: number
  method: Method
  url: string
}

function getError(method: Method, url: string, xhr: XMLHttpRequest) {
  let msg: string
  if (xhr.response) {
    msg = `${xhr.response.error || xhr.response}`
  } else if (xhr.responseText) {
    msg = `${xhr.responseText}`
  } else {
    msg = `${xhr.status}`
  }

  const err = new Error(msg) as AjaxError
  err.status = xhr.status
  err.method = method
  err.url = url
  return err
}

function getBody(xhr: XMLHttpRequest) {
  const text = xhr.responseText || xhr.response
  if (!text) {
    return text
  }
  return JSON.parse(text)
}

// internal function !!!
export function request<T>(
  method: Method,
  url: string,
  data?: Document | Blob | FormData | string,
  options?: RequestOptions,
) {
  return new Promise<T>((resole, reject) => {
    if (typeof XMLHttpRequest === 'undefined') {
      reject(new Error('[Helm] XMLHttpRequest was not been supported'))
    }

    const xhr = new XMLHttpRequest()

    xhr.open(method, url, true)

    if (xhr.upload) {
      xhr.upload.onprogress = e => {
        if (e.total > 0) {
          ;(e as UploadProgressEvent).percent = (e.loaded / e.total) * 100
        } else {
          ;(e as UploadProgressEvent).percent = 0
        }
        options?.onProgress?.(e as UploadProgressEvent)
      }
    }

    xhr.onerror = () => {
      reject(getError(method, url, xhr))
    }
    xhr.onload = () => {
      if (xhr.status < 200 || xhr.status >= 300) {
        reject(getError(method, url, xhr))
      }
      try {
        const result = getBody(xhr)
        resole(result)
      } catch (err) {
        reject(err)
      }
    }
    if (options?.withCredentials && 'withCredentials' in xhr) {
      xhr.withCredentials = options.withCredentials
    }
    if (options?.headers) {
      Object.entries(options.headers).forEach(([key, value]) => {
        if (options.headers?.[key] !== '') {
          xhr.setRequestHeader(key, value)
        }
      })
    }
    xhr.send(data)
  })
}
