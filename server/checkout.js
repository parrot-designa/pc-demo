import request from './req';

//获取结算页商品信息
export function getGoodsInfo(){  
    return request.post('/api/jiesuan/products');
}
//获取结算页配送地址
export function getShipList(params){  
    return request.post('/api/jiesuan/shipping_list',params);
}
 
export function getPaytypeList(){  
    return request.post('/api/jiesuan/paytype_list',{client:'pc'});
}
//获取包装清单
export function getPackList(params){  
    return request.post('/api/jiesuan/pack_list',params);
}
 