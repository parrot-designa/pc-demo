import request from './req';

//加入购物车
export function addCart(params){  
    return request.post('/api/Cart/add',params);
}

//购物车列表
export function list(params){  
    return request.post('/api/Cart/list',params);
}

//修改购物车
export function edit(params){  
    return request.post('/api/Cart/edit',params);
}

//删除购物车某一商品
export function deleteItem(params){  
    return request.post('/api/Cart/del',params);
}


//清空购物车
export function clean(params){  
    return request.post('/api/Cart/clean',params);
}

//获取购物车总价
export function total(params){  
    return request.post('/api/Cart/get_total',params);
}

//购物车购买
export function shopCartBuy(){
    return request.post('/api/shop/product_save_cart');
}