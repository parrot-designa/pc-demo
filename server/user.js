import request from './req';

//用户登录
export function userLogin(params){
    return request.post('/api/Public/login',params)
}

//获取用户信息
export function getUserInfo(){ 
    return request.post('/api/User/get_user_info');
}

//保存用户信息
export function saveUserInfo(){ 
    return request.post('/api/User/save_basic_info');
}