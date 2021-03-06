import global from './global';  
import user from './user';
import address from './address'; 
import order from './order';

export const state = () => ({
    locales: ['en-US', 'zh-CN'],
    locale: 'zh-CN'
})

export const mutations = {
	// 此处为设置locale
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }
    }
} 

export const actions={
    async nuxtServerInit({commit,dispatch},{req,app}){ 
        
    }
}

export const modules={
    global,  
    user, 
    address,
    order
}