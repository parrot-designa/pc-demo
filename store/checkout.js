
import { getGoodsInfo,getShipList,getPaytypeList,getPackList } from '@/server/checkout'; 
import { getAddressList } from '@/server/address'; 
import { saveAddress } from '@/server/order'; 

export const state = () => ({
    goodInfo:{},
    currentAddress:{},
    shipList:[],
    payTypeList:[],
    packList:[]
});

export const mutations = { 
    SET_GOODINFO(state, info) { 
        state.goodInfo = info;
    },
    SET_ADDRESS(state,current){
        state.currentAddress=current;
    },
    SET_SHIP(state,list){
        state.shipList=list;
    },
    SET_PAYTYPE(state,list){
        state.payTypeList=list;
    },
    SET_PACKLIST(state,list){
        state.packList=list;
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
    async getShipList({commit},params){
        const res = await getShipList({country:1,...params});
        const data=res.data.map(item=>({...item,label:item.shipping_name,text:item.shipping_desc}))
        commit("SET_SHIP",data) 
        return res.data
    },
    async getPaytypeList({commit},params){
        const res = await getPaytypeList();
        const data=res.data.map(item=>({...item,label:item.name,text:item.shipping_desc}))
        commit("SET_PAYTYPE",data) 
        return res.data
    },
    async getPackList({commit},params){
        const { data } = await getPackList(params); 
        console.log("===getPackList===",data)
        commit("SET_PACKLIST",data) 
        return data
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}