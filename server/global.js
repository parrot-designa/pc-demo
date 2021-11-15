import request from '@/utils/request';

//获取导航
export function getHeaderNav(){  
    return request.post('/api/Index/header_nav');
}

//获取底部
export function getFooter(){ 
    return request.post('/api/Index/foot_brief');
}

//获取底部友情链接
export function getFriendLink(){ 
    return request.post('/api/Index/friend');
}

//获取帮助中心
export function getHelpMsg(){ 
    return request.post('/api/Index/help');
}