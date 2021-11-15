import request from '@/utils/request';

//登陆
export function login(){ 
    return request.post('/api/Public/login');
}