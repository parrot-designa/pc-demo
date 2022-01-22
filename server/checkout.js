import request from './req';

//获取结算页商品信息
export function getGoodsInfo(){  
    return request.post('/api/orderconfirm/products');
}
//获取结算页配送地址
export function shipList(params){  
    return request.post('/api/orderconfirm/shipping_list',params);
}
 
export function payTypeList(){  
    return request.post('/api/orderconfirm/paytype_list',{client:'pc'});
}
//获取包装清单
export function getPackList(params){  
    return request.post('/api/orderconfirm/pack_list',params);
}
 
//查询详情
export function checkout(params){
    return request.post('/api/orderconfirm/index',params);
}

//查询总金额
export function total_amount(params){
    return request.post('/api/orderconfirm/total_amount',params);
}