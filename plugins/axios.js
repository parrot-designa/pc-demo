import api, { CreateAxios, req } from '@/server'

export default (content, inject) => {
  console.log("===CreateAxios",CreateAxios)
  CreateAxios.init(content)

  inject('http', req)
  inject('api', api)
}
