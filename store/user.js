
import { getUserInfo } from '@/server/user';

export const state = () => ({
    info:{},
    token:''
});

export const mutations = {
	// 此处为设置头部背景色
    SET_INFO(state, info) {  
        state.info=info;
    },
    SET_TOKEN(state,token){
        localStorage.setItem('token',token)
        state.token=token;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getInfo({commit}){ 
        const info=await getUserInfo(); 
        if(info){
            commit ('SET_INFO',info);
        }
        
    }, 
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}