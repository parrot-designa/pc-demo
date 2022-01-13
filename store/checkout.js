
import { getGoodsInfo,getPaytypeList,getPackList } from '@/server/checkout'; 
import { getAddressList } from '@/server/address'; 
import { saveAddress } from '@/server/order'; 

export const state = () => ({
    goodInfo:{},
    currentAddress:{}, 
    payTypeList:[]
});

export const mutations = { 
    SET_GOODINFO(state, info) { 
        state.goodInfo = info;
    },
    SET_ADDRESS(state,current){
        state.currentAddress=current;
    }, 
    SET_PAYTYPE(state,list){
        state.payTypeList=list;
    }, 
};

export const actions = {
    // 此处为设置头部背景色
    async getGoodsInfo({ commit }, params) {
        const res = await getGoodsInfo();
        commit("SET_GOODINFO", res.data.map(item=>({...item,...item.product_info})));
        return res.data;
    },
    async getDefaultAddress({ commit }, params) {
        const res = await getAddressList({is_default:1});
        const current=res.data.find(item=>item.is_default===1)||{};
        await saveAddress({address_id:current.id});
        commit("SET_ADDRESS",current)
        return current;
    }, 
    async getPaytypeList({commit},params){
        const res = await getPaytypeList();
        const data=res.data.map(item=>({...item,label:item.name,text:item.shipping_desc}))
        commit("SET_PAYTYPE",data) 
        return res.data
    }, 
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}