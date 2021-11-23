import request from '@/utils/request';

//获取轮播图
export function getGoodsList(params){ 
    return request.post('/api/cat/list',params);
}


//获取商品详情
export function getGoodDetail(params){  
    return request.post('/api/goods/index',params);
}

 