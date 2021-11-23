
import { getIndexGoods,getIndexPhones } from '@/server/home';

export const state = () => ({
    //全局头部背景色
    goodList:[],
    //照片墙列表
    photo:{}
});

export const mutations = {
	// 此处为设置头部背景色
    SET_GOODS(state, goods) { 
        state.goodList=goods;
    },
    SET_PHOTOLIST(state,photos){
        state.photo=photos;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getGoods({commit}){ 
        const goods=await getIndexGoods(); 
        commit ('SET_GOODS',goods);
    },
    async getPhoto({commit}){
        const photos=await getIndexPhones();
        commit ('SET_PHOTOLIST',photos);
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}