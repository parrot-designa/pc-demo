import request from '@/utils/request';

//获取结算页商品信息
export function getGoodsInfo(){  
    return request.post('/api/jiesuan/products');
}
//获取结算页配送地址
export function getShipList(params){  
    return request.post('/api/jiesuan/shipping_list',params);
}
 
 