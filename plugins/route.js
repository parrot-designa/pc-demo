export default ({app}) => {
    console.log("===app===",app)
    //导航加载后
    app.router.afterEach((to,from)=>{ 
        if(to.path!=='/login'){
            app.store.commit('global/SET_GLOBAL_HEADER_BGCOLOR','#fff')
        } 
    })
}