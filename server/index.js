import { importAll } from '@/utils'
import req, { CreateAxios } from './req'

let api = {}

importAll(require.context('./', false, /\.js$/), (key, r) => {
  const keyPath = key.match(/\.\/(.+)\.js$/)[1]
  if (!['index'].includes(keyPath)) {
    api[keyPath] = r(key)
  }
})

export default api
export {
  req,
  CreateAxios 
}
