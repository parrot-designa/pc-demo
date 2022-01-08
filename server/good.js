import request from './req';

//获取轮播图
export function getGoodsList(params){ 
    return request.post('/api/cat/list',params);
}


//获取商品详情
export async function detail(params){    
    return request.post('/api/goods/basic',params);
}

 