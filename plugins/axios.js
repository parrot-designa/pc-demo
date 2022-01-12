import api, { CreateAxios, req } from '@/server'

export default (content, inject) => { 
  CreateAxios.init(content)

  inject('http', req)
  inject('api', api)
}
