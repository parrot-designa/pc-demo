
import { getGoodsList,getGoodDetail } from '@/server/good';

export const state = () => ({
    page:{
        current:1,
        pageSize:10
    },
    dataSource:[],
    detail:{}
});

export const mutations = {
	// 此处为设置头部背景色
    SET_PAGE(state, page) { 
        state.page = page;
    },
    SET_DATA(state, dataSource) { 
        state.dataSource = dataSource;
    },
    SET_DETAIL(state,detail){
        state.detail=detail;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getGoodsList({commit}){ 
        const goods=await getGoodsList();  
        commit('SET_DATA',goods.data);
    },
    async getGoodDetail({commit},params){ 
        const detail=await getGoodDetail(params);  
      
        commit('SET_DETAIL',detail);
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}