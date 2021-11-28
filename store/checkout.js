
import { getGoodsInfo,getShipList } from '@/server/checkout'; 
import { getAddressList } from '@/server/address'; 

export const state = () => ({
    goodInfo:{},
    currentAddress:{},
    shipList:[]
});

export const mutations = { 
    SET_GOODINFO(state, info) { 
        state.goodInfo = info;
    },
    SET_ADDRESS(state,current){
        state.currentAddress=current;
    },
};

export const actions = {
    // 此处为设置头部背景色
    async getGoodsInfo({ commit }, params) {
        const res = await getGoodsInfo();
        commit("SET_GOODINFO", res);
        return res;
    },
    async getDefaultAddress({ commit }, params) {
        const res = await getAddressList({is_default:1});
        const current=res.data.find(item=>item.is_default===1)||{};
       
        commit("SET_ADDRESS",current)
        return current;
    },
    async getShipList({commit},params){
        const res = await getShipList({country:1,...params});
        console.log("==current==",res)
        return res
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}