
import { addCart, cartList ,editCart,delCartOne,clearCart, getTotalCart,shopCartBuy } from '@/server/cart';

export const state = () => ({
    detail: {},
    list:[],
    total:{
        total_num:0,
        total_price:0
    }
});

export const mutations = {
    // 此处为设置头部背景色
    SET_LIST(state, list) {
        state.list = list;
    },
    SET_TOTAL(state,total){
        state.total=total;
    }
};

export const actions = {
    // 此处为设置头部背景色
    async addCart({ commit }, params) {
        const res = await addCart(params);
        console.log("==res==", res)
        if (res.errcode === 0) {
            // this.$bvToast.toast(data.data, {
            //     autoHideDelay: 1000,
            //     title: "成功提示"
            // });
            const router = $nuxt.$router;

            if(router.currentRoute.path==='/cart') return
            
            router.push({path:'/cart'}) 
            
        }
    },
    async cartList({commit,dispatch},params){
        const res=await cartList(); 
        const res_data=res.data.map((item,index)=>({...item,...item.product_info}))
        console.log("==res_data==", res_data)  
        await commit('SET_LIST',res_data);
        await dispatch('getTotal')
    },
    async editCart({commit,dispatch},params){
        const res=await editCart(params); 
        return res.errcode===0
    },
    async deleteCart({commit,dispatch},params){
        const res=await delCartOne(params);  
        if (res.errcode === 0) {    
            await dispatch("cartList")
        }
    },
    async cleanCart({commit,dispatch},params){
        const res=await clearCart(params);  
        if (res.errcode === 0) {    
            await dispatch("cartList")
        }
    },
    async getTotal({commit,dispatch},params){
        const res=await getTotalCart(params);  
        await commit('SET_TOTAL',res.data);
    },
    async shopCartBuy({commit}){
        const res=await shopCartBuy();  
        return res.errcode===0
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}