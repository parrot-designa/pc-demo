import request from './req';

//获取用户信息
export function getUserInfo(){ 
    return request.post('/api/User/get_user_info');
}