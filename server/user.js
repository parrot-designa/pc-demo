import request from '@/utils/request';

//获取用户信息
export function getUserInfo(){ 
    return request.post('/api/User/get_user_info');
}