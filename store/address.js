
import { getAllAddressList, getAddressList, deleteAddress, editAddress, addAddress } from '@/server/address';
import S from '@/spx';

export const state = () => ({
    //省市区地址，全局只请求一次
    addressList: [],
    //我的地址
    list: []
});

export const mutations = {
    // 此处为设置头部背景色
    SET_LIST(state, list) {
        S.setAddressList(list);
        state.addressList = list;
    },
    SET_MYLIST(state, list) {
        state.list=list;
    },
   
};

export const actions = {
    // 此处为设置头部背景色
    async getAllList({ commit }, params) {
        const res = await getAllAddressList();
        commit("SET_LIST", res);
        return res;
    },
   
    async getMyList({ commit }, params) {
        const { errcode,data } = await getAddressList();
        if(errcode===0){
            commit("SET_MYLIST", data||[]);
        } 
    },
    async delete({ commit,dispatch }, address_id) {
        const data=await deleteAddress({address_id});
        console.log("data",data)
        if(data.errcode==0){
            return true
        }
    },
    async add({ commit,dispatch }, form) { 
        const data=await addAddress({country:1,zipcode:100010,is_default:0,...form}); 
        if(data.errcode==0){
            return true
        }
    },
    async edit({ commit,dispatch }, form) { 
        const data=await editAddress({country:1,zipcode:100010,is_default:1,...form}); 
        if(data.errcode==0){
            return true
        }
    }

};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}