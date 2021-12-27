import request from '@/utils/request';

//创建订单
export function createOrder(){ 
    return request.post('/api/jiesuan/create_order');
}

//保存支付方式
export function savePayType(params){
    return request.post('/api/jiesuan/order_payment_save',params);
}

//保存地址
export function saveAddress(params){
    return request.post('/api/jiesuan/order_address_save',params);
}

//保存配送方式
export function saveShip(params){
    return request.post('/api/jiesuan/order_shipping_save',params);
}

export function detail(params){
    return request.post('/api/Userinfo/order_detail',params);
}