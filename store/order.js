
import { createOrder,detail } from '@/server/order';

export const state = () => ({
    //全局头部背景色 
    orderInfo:{}
});

export const mutations = {
	// 此处为设置头部背景色 
    SET_ORDERINFO(state, info) { 
        state.orderInfo = info;
    },
};

export const actions = {
	// 此处为设置头部背景色
    async createOrder({commit}){ 
        const order=await createOrder(); 
        commit("SET_ORDERINFO",{order_id:order.data})
        return order;
    },
    async detail({commit},order_id){
        const order=await detail({order_id});
        commit("SET_ORDERINFO",order.data) 
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}