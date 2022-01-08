import request from './req';

//获取总地址
export function getAllAddressList(){  
    return request.post('/api/area/get_area_info');
}

//获取当前用户地址
export function getAddressList(params){
    return request.post('/api/jiesuan/address_list',params);
}
//删除地址
export function deleteAddress(params){
    return request.post('/api/jiesuan/address_remove',params);
}
 
//修改地址
export function editAddress(params){
    return request.post('/api/jiesuan/address_edit',params);
}

//增加地址
export function addAddress(params){
    return request.post('/api/jiesuan/address_add',params);
}