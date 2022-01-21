import Vue from 'vue' 
    
const install = function(Vue, opts = {}) {  
 
  const components = {} 

  const baseContext = require.context('./components', true, /index(\.vue|\.js)$/)

  function resloveModule(mod) {
    Object.keys(mod).forEach((key) => { 
        mod[key].name && (components[mod[key].name] = mod[key]) 
    })
  }

  baseContext.keys().forEach((key) => {
    const mod = baseContext(key)
    resloveModule(mod)
  })  

  console.log(components);
  Object.keys(components).forEach((key) => {
    const comp = components[key]
    Vue.component(comp.name, comp)
  })  
}

install(Vue) 
 