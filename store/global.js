export const state = () => ({
    //全局头部背景色
    globalHeaderBgColor:''
});

export const mutations = {
	// 此处为设置头部背景色
    SET_GLOBAL_HEADER_BGCOLOR(state, bgcolor) { 
        state.globalHeaderBgColor=bgcolor;
    }
};

export default {
    namespaced:true,
    state,
    mutations
}