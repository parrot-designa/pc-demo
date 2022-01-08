import request from './req';

//登陆
export function login(){ 
    return request.post('/api/Public/login');
}