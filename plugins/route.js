export default ({app}) => { 
    //导航加载后
    app.router.afterEach((to,from)=>{ 
        if(to.path!=='/login'){
            app.store.commit('global/SET_GLOBAL_HEADER_BGCOLOR','#fff')
        }
        if(to.path=='/login'){
            app.store.commit('global/SET_GLOBAL_HEADER_BGCOLOR','')
        }  
        if(to.path==='/user'){
            //用户中心面包屑
            app.store.commit('global/SET_GLOBAL_BREAD',{items:['首页','用户中心']})
        } 
        if(to.path==='/pic'){
            app.store.commit('global/SET_GLOBAL_BREAD',{items:['首页','照片墙']})
        } 
        console.log("to===>",to)
        app.store.commit('global/SET_GLOBAL_PATH',to.path);
        app.store.commit('global/SET_GLOBAL_QUERY',to.query);
    })
}