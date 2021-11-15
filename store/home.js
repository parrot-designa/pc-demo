
import { getIndexGoods } from '@/server/home';

export const state = () => ({
    //全局头部背景色
    goodList:[]
});

export const mutations = {
	// 此处为设置头部背景色
    SET_GOODS(state, goods) { 
        state.goodList=goods;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getGoods({commit}){ 
        const goods=await getIndexGoods(); 
        commit ('SET_GOODS',goods);
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}