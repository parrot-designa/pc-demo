
import { getUserInfo } from '@/server/user';

export const state = () => ({
    info:{},
    token:''
});

export const mutations = {
	// 此处为设置头部背景色
    SET_INFO(state, info) {   
        if(process.env.VUE_ENV=='client'){ 
            localStorage.setItem('info',JSON.stringify(info))
        }
        state.info=info;
    },
    SET_TOKEN(state,token){
        this.$cookies.set('TOKEN',token);
        state.token=token;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getInfo({commit}){ 
        const { data }=await getUserInfo();  
        if(data){
            commit ('SET_INFO',data);
        } 
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}