
import { getHeaderNav,getFooter, getFriendLink,getHelpMsg } from '@/server/global';

export const state = () => ({
    //全局头部背景色
    globalHeaderBgColor:'',
    globalBreadType:1,
    globalBreadItems:[],
    globalPath:'',
    globalQuery:{},
    globalNavigation:[],
    globalFooterMsg:'',
    getFriendLink:[],
    getHelpMsg:[]
});

export const mutations = {
	// 此处为设置头部背景色
    SET_GLOBAL_HEADER_BGCOLOR(state, bgcolor) { 
        state.globalHeaderBgColor=bgcolor;
    },
    SET_GLOBAL_BREAD(state,bread){
        if(bread.type){
            state.globalBreadType=bread.type;
        }
        if(bread.items){
            state.globalBreadItems=bread.items;
        }
    },
    SET_GLOBAL_PATH(state,path){
        state.globalPath=path;
    },
    SET_GLOBAL_QUERY(state,query){
        state.globalQuery=query;
    },
    SET_NAVIGATION(state,navigation){ 
        state.globalNavigation=navigation;
    },
    SET_FOOTER(state,footer){
        state.globalFooterMsg=footer;
    },
    SET_FRIENDLINK(state,link){
        state.getFriendLink=link;
    },
    SET_HELP_CENTER(state,help){
        state.getHelpMsg=help;
    }
};

export const actions = {
	// 此处为设置头部背景色
    async getNavgation({commit}){ 
        const navgation=await getHeaderNav(); 
        commit ('SET_NAVIGATION',navgation);
    },
    async getFooter({commit}){
        const footer=await getFooter();
        commit ('SET_FOOTER',footer);
    },
    async getFriendLink({commit}){
        const link=await getFriendLink();
        commit ('SET_FRIENDLINK',link);
    },
    async getHelpCenter({commit}){
        const help=await getHelpMsg();
        commit ('SET_HELP_CENTER',help);
    }
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}