import request from './req';

//获取轮播图
export function getBanners(){ 
    return request.post('/api/Index/banners');
}

//获取首页商品数据
export function getIndexGoods(){
    return request.post('/api/Index/get_goods');
}

//获取首页照片墙
export function getIndexPhones(){
    return request.post('/api/Index/phones');
}